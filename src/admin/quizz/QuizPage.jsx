import React, { useState, useEffect } from 'react';
import Header from '../layouts/Header/Header';
import Sidebar from '../layouts/Sidebar/Sidebar';
import './QuizPage.css';
import axios from 'axios';
import { SERVER_URL } from "../../config";


function toPascalCase(str) {
  return str.replace(/(^\w|_\w)/g, match => match.replace('_', '').toUpperCase());
}

function convertKeysToPascalCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(v => convertKeysToPascalCase(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[toPascalCase(key)] = convertKeysToPascalCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
}

function QuizPage() {
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  // const [quiz, setSingleQuiz] = useEffect([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // Track current page index
  const itemsPerPage = 1;
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState('');

  const BASE_URL = SERVER_URL;

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     setError('User is not authenticated');
  //     return;
  //   }

  //   axios.get(`${BASE_URL}/quize-details`, {
  //     headers: {
  //       'remember-token': token,
  //     }
  //   })
  //   .then(response => {
  //     console.log(response)
  //   })
  // }, [BASE_URL]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('User is not authenticated');
      console.error('User is not authenticated');
      return;
    }

    // Fetch quizzes from API
    axios.get(`${BASE_URL}/quize-details`, {
      headers: {
        'remember-token': token,
      },
      body :{
        "quiz_id" : 12
      }
    })
      .then(res => {
        console.log('API Response:', res);
        // Check if the data property exists and is an array
      })
      .catch(error => {
        console.error('Error fetching quizzes:', error);
        setError('Error fetching quizzes');
      });
  }, []);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('User is not authenticated');
      return;
    }

    axios.get(`${BASE_URL}/quizes`, {
      headers: {
        'remember-token': token,
      }
    })
    .then(response => {
      console.log(response.data)
      if (response.data.status) {
        // Convert the response data
        const transformedData = response.data.data.map(item => convertKeysToPascalCase(item));
        setQuizzes(transformedData);
        setError(''); // Clear any previous errors
        // console.log("TransformData",transformedData)
      }
    })
    .catch(error => {
      console.error('There was an error fetching the data!', error);
      setError('No Data Found.');
    });
  }, []);

  const currentQuiz = quizzes[currentPageIndex];

  // Navigate to previous quiz
  const goToPrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  // Navigate to next quiz
  const goToNext = () => {
    if (currentPageIndex < quizzes.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };
  console.log(quizzes)

  return (
    <>
      <Header />
      <Sidebar />
      <div className="quiz-main-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="container">
                <div className='row'>
                  <div className="col-xl-12 quiz-table-container">
                    <div className="quiz-heading-container d-flex align-item-center justify-content-between">
                      <h1>Quiz</h1>
                      <h3>Dashboard <span>/ Quiz</span></h3>
                    </div>
                    <div className="quiz-dropdown-container d-flex align-item-center">
                      <select className="select-wide col-xl-3" value={selectedClass} onChange={e => setSelectedClass(e.target.value)}>
                        <option value="">Select Class</option>
                        {quizzes.map(cls => (
                          <option key={cls.Id} value={cls.Id}>{cls.ClassName}</option>
                        ))}
                      </select>
                      <select className="select-wide col-xl-3" value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}>
                        <option value="">Select Subject</option>
                        {quizzes.map(subject => (
                          <option key={subject.Id} value={subject.Id}>{subject.SubjectName}</option>
                        ))}
                      </select>
                      <select className="select-wide-1 col-xl-4" value={selectedChapter} onChange={e => setSelectedChapter(e.target.value)}>
                        <option value="">Select Chapter</option>
                       
                        {quizzes.find(sub => sub.id === selectedSubject)?.chapters?.map(chapter => (
                          <option key={chapter.Id} value={chapter.Id}>{chapter.Chapter}</option>
                        ))}
                      </select>
                      <button className="quiz-search-button">Search</button>
                    </div>
                    <div className='quiz-entry-main-student-container'>
                      <div className="quiz-entry-student-container ">
                        <div className="quiz-top-dropdown-section ">
                            <div className="d-flex align-item-center">
                                <p>Show</p>
                                <select onChange={(e) => setSelectedId(e.target.value)}>
                                  <option value="">6</option>
                                  <option value="6">6 Entries</option>
                                </select>
                                <p>Entries</p>
                            </div>
                            <input type="search" placeholder="Search"/>
                        </div>
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Class</th>
                              <th>Subject</th>
                              <th>Chapter</th>
                              <th>Difficulty Level</th>
                              <th>Duration</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                          
                          {quizzes.map(quiz =>(
                            <tr key={quiz.Id}>
                                <td className="align-middle">{quiz.Id}</td>
                                <td className="align-middle" >{quiz.ClassName}</td>
                                <td className="align-middle">{quiz.SubjectName}</td>
                                <td className="align-middle">{quiz.Chapter ? quiz.Chapter.Name : 'N/A'}</td>
                                <td className="align-middle">{quiz.DifficultyLevelName}</td>
                                <td className="align-middle">{quiz.Duration}</td>
                                <td className="align-middle">
                                  <button className=""><i className="bi bi-eye"></i> Action</button>
                                </td>
                              </tr>
                          )
                             
                            )}
                          </tbody>
                        </table>
                      </div>
                      <div className="quizz-entries-details">
                          <p className='mt-4'>Showing {currentPageIndex + 1} of {quizzes.length}</p>
                          <div className="d-flex align-item-center mt-4">
                            <button className="btn border-0 mt-0" onClick={goToPrevious} disabled={currentPageIndex === 0}>Previous</button>
                            <button className="btn border-0 mt-0"  onClick={goToNext} disabled={currentPageIndex === quizzes.length - 1}>Next</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizPage;
