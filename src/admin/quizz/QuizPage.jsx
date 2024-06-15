import React, { useState, useEffect } from 'react';
import Header from '../layouts/Header/Header';
import Sidebar from '../layouts/Sidebar/Sidebar';
import './QuizPage.css';
import axios from 'axios';

function QuizPage() {
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://digitaledupark.pleximus.co.in/api/edu/quizes')
      .then(response => {
        setClasses(response.data.classes || []);
        setSubjects(response.data.subjects || []);
        setChapters(response.data.chapters || []);
        setQuizzes(response.data.quizzes || []);
        setError('');  // Clear any previous errors
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError('Failed to fetch data. Please try again later.');
      });
  }, []);

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
                  <div className="col-xl-12">
                    <div className="quiz-heading-container d-flex align-item-center justify-content-between">
                      <h1>Quiz</h1>
                      <h3>Dashboard <span>/ Quiz</span></h3>
                    </div>
                    <div className="quiz-dropdown-container d-flex align-item-center">
                      <select className="select-wide col-xl-3" value={selectedClass} onChange={e => setSelectedClass(e.target.value)}>
                        <option value="">Select Class</option>
                        {classes.map(cls => (
                          <option key={cls.id} value={cls.id}>{cls.name}</option>
                        ))}
                      </select>
                      <select className="select-wide col-xl-3" value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}>
                        <option value="">Select Subject</option>
                        {subjects.map(subject => (
                          <option key={subject.id} value={subject.id}>{subject.name}</option>
                        ))}
                      </select>
                      <select className="select-wide-1 col-xl-4" value={selectedChapter} onChange={e => setSelectedChapter(e.target.value)}>
                        <option value="">Select Chapter</option>
                        {chapters.map(chapter => (
                          <option key={chapter.id} value={chapter.id}>{chapter.name}</option>
                        ))}
                      </select>
                      <button className="quiz-search-button">Search</button>
                    </div>
                    <div className="quiz-entry-student-container">
                      {error && <div className="alert alert-danger">{error}</div>}
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Chapter</th>
                            <th>Full Name</th>
                            <th>Duration</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {quizzes.map(quiz => (
                            <tr key={quiz.id}>
                              <td>{quiz.id}</td>
                              <td>{quiz.className}</td> {/* Adjust field names based on actual data structure */}
                              <td>{quiz.subjectName}</td> {/* Adjust field names based on actual data structure */}
                              <td>{quiz.chapterName}</td> {/* Adjust field names based on actual data structure */}
                              <td>{quiz.fullName}</td> {/* Adjust field names based on actual data structure */}
                              <td>{quiz.duration}</td> {/* Adjust field names based on actual data structure */}
                              <td>
                                <button className="btn btn-primary">Action</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
