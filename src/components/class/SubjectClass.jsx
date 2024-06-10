import React,{useState, useCallback, useEffect} from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { subjectReducer, chapterReducer, noOfQuestionReducer } from "./SubjectClassSlice";
import { SERVER_URL } from "../../config";

const BASE_URL = SERVER_URL;

const SubjectClass=()=>{

  const { id } = useParams();
  const [label, setLabel] = useState([]);

  let [subjectDifficulty , setSubjectDifficulty] = useState(1);
  let [chapterDifficulty , setChapterDifficulty] = useState(1);
  
  const [subjectId , setSubjectId] = useState(0);
  const [ChapterId , setChapterId] = useState(0);
  const [timeLimit , setTimeLimit] = useState(0);


  const data = useSelector((state) => state.subjectClass.data);
  const chapter = useSelector((state) => state.subjectClass.chapters);
  const question = useSelector((state) => state.subjectClass.no_of_question);
  const [noOfQuestion , setNoOfQuestion] = useState('');
  const [chapterNoOfQuestion , setChapterNoOfQuestion] = useState('');


  const dispatch = useDispatch();
  const getAllList = useCallback(async () => {
    dispatch(
      subjectReducer({
        //user_type: "admin",
        class: id,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getAllList();
    }

    return () => {
      mounted = false;
    };
  }, [getAllList]);

  const getAllChapterList = useCallback(async () => {
    dispatch(
      chapterReducer({
        //user_type: "admin",
        subject: subjectId,
        class: id,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getAllChapterList();
    }

    return () => {
      mounted = false;
    };
  }, [getAllChapterList]);

  const getQuestionNoList = useCallback(async () => {
    dispatch(
      noOfQuestionReducer({
      })
    );
  }, [dispatch]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getQuestionNoList();
    }

    return () => {
      mounted = false;
    };
  }, [getQuestionNoList]);
  
  useEffect(() => 
    {
      axios.get(`${BASE_URL}/quiz-label`)
      .then(response => 
        {
          setLabel(response.data.data);
        })
        .catch(error =>
           {
              console.error('Error fetching data: ', error);
         });
    },
    []);

    const bgColors = ['red', 'green', 'blue', 'yallow'];

    const initialUser = localStorage.getItem("token") || null;
    const [user, setUser] = useState(initialUser);
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      setUser(token || null);
    }, [initialUser]);
    
    let Difficulty = subjectDifficulty ? subjectDifficulty : chapterDifficulty;
    // let no_of_question = chapterNoOfQuestion ? chapterNoOfQuestion : noOfQuestion;
    let no_of_question = (chapterNoOfQuestion || noOfQuestion) ?? question[0].no_of_questions;

    const navigate = useNavigate();
    const handleSubmit = () => {
    
        if (!user) {
          const loginModal = new window.bootstrap.Modal(document.getElementById('loginPopup'));
          loginModal.show();
        }else{
          navigate('/dashboard/instruction1', {
            state: { id, subjectId, ChapterId, timeLimit, Difficulty, no_of_question }
          });
        }
    };


    useEffect(() => {
    if (question && question.length > 0) {
        setChapterNoOfQuestion(question[0].no_of_questions);
        setNoOfQuestion(question[0].no_of_questions);
        setTimeLimit(question[0].quiz_time);
    }
}, [question]);

useEffect(() => {
}, [chapterNoOfQuestion]);


    return(
            <>
              <section className="classPage clearfix">
                <div className="container">
                  <div className="accordion" id="accordionQuiz">
                  <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                      <h2>Subject Wise Quiz</h2>
                      <h5>Select Difficulty Level :</h5>
                        <ul className="SelectLevel clearfix">
                          {/* { label.map((data,index)=>
                            (
                              <li className="clearfix" key={index}>
                                <div className="form-check">
                                  <input type="radio" className="form-check-input" id="radio" name={"option"+index} value={"option" +index}  checked={index === 0} />
                                  {data.name}
                                  <label className="form-check-label" htmlFor= {"radio" + index}  ></label>
                                </div>
                              </li>
                            ))
                          } */}

                          {label.map((data, index) => (
                            <li className="clearfix" key={index}>
                              <div className="form-check">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  id={"radio" + index}
                                  name="subjectDifficulty"
                                  value={data.id}
                                  checked={subjectDifficulty === data.id} 
                                  onChange={() => setSubjectDifficulty(data.id)}
                                />
                                <label className="form-check-label" htmlFor={"radio" + index}>
                                  {data.name}
                                </label>
                              </div>
                            </li>
                          ))}
                      
                      </ul>

                      {data && data?.length > 0 ? (
                            data?.map((item, subjectIndex) => (
                              <div className="accordion-item" key={subjectIndex}>
                              <div className="accordion-header" id={"heading_"+subjectIndex}>
                                <button className={`accordion-button ${bgColors[subjectIndex % bgColors.length]}`} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_"+subjectIndex} aria-expanded="false" aria-controls={"collapse_"+subjectIndex} onClick={() => setSubjectId(item.subject_id)}>
                                {item.subject_name}
                                </button>
                              </div>
                              <div id={"collapse_"+subjectIndex} className="accordion-collapse collapse" aria-labelledby={"heading_"+subjectIndex} data-bs-parent="#accordionQuiz">
                                <div className="accordion-body">

                                {question && question?.length > 0 ? (
                            question?.map((qItem, qIndex) => (
                                <div className="form-check" key={qIndex}>
                                    <input type="radio" className="form-check-input" id={"radio" + subjectIndex + "_" + qIndex} name={"chapterNoOfQuestion" + subjectIndex}  value={qItem.id}  onChange={() => {setChapterNoOfQuestion(qItem.no_of_questions); setTimeLimit(qItem.quiz_time);}}  defaultChecked={qIndex === 0} /> {qItem.no_of_questions}{" Question Quiz"}
                                    <label className="form-check-label" htmlFor={"radio" + subjectIndex + "_" + qIndex}></label>
                                  </div>
                              ))
                              ) : (
                                <tr>
                                  <td colSpan="12">No Data Found</td>
                                </tr>
                              )}

                              
                                   {/* <Link to='/dashboard/instruction1' className={`btn btn-primary ${bgColors[i % bgColors.length]} animate-btn mt-3 w-100`}>Start Exam</Link> */}

                                <button className={`btn btn-primary ${bgColors[subjectIndex % bgColors.length]} animate-btn mt-3 w-100`} onClick={handleSubmit}>Start Exam</button>
                                </div>
                              </div>
                              </div>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="12">No Data Found</td>
                            </tr>
                          )}
                      
                 
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                      <h3>Chapter Wise Quiz</h3>
                      <h5>Select Difficulty Level :</h5>
                        <ul className="SelectLevel clearfix">
                        {/* { label.map((data,index)=>
                            (
                              <li className="clearfix">
                                <div className="form-check">
                                  <input type="radio" className="form-check-input" id={"radio2"+index} name={"optradio2"+index} value={"option2"+index} checked={index === 2} />
                                    {data.name}
                                  <label className="form-check-label" htmlFor={"radio2"+index}></label>
                                </div>
                              </li>
                            ))}
                        */}

                          {label.map((data, index) => (
                            <li className="clearfix" key={index}>
                              <div className="form-check">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  id={"radio2" + index}
                                  name="chapterDifficulty"
                                  value={data.id}
                                  checked={chapterDifficulty === data.id} 
                                  onChange={() => setChapterDifficulty(data.id)}
                                />
                                <label className="form-check-label" htmlFor={"radio2" + index}>
                                  {data.name}
                                </label>
                              </div>
                            </li>
                          ))}
                      </ul>
                        
                      {chapter && chapter?.length > 0 ? (
                          chapter?.map((chapterSubjectItem, chapterSubjectIndex) => (
                            <div className="accordion-item" key={chapterSubjectIndex}>
                              <div className="accordion-header" id={"heading_2" + chapterSubjectIndex}>
                                <button
                                  className={`accordion-button ${bgColors[chapterSubjectIndex % bgColors.length]}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={"#collapse_21" + chapterSubjectIndex}
                                  aria-expanded="false"
                                  aria-controls={"collapse_21" + chapterSubjectIndex}
                                  onClick={() => {
                                    setSubjectId(chapterSubjectItem.subject_id);
                                    if (chapterSubjectItem.chapters && chapterSubjectItem.chapters.length > 0) {
                                      setChapterId(chapterSubjectItem.chapters[0].id);
                                    }
                                  }}
                                >
                                  {chapterSubjectItem.subject_name}
                                </button>
                              </div>
                              <div
                                id={"collapse_21" + chapterSubjectIndex}
                                className="accordion-collapse collapse"
                                aria-labelledby={"heading_21" + chapterSubjectIndex}
                                data-bs-parent="#accordionQuiz"
                              >
                                <div className="accordion-body">
                                  {chapterSubjectItem.chapters && chapterSubjectItem.chapters?.length > 0 ? (
                                    chapterSubjectItem.chapters?.map((chapter, chapterIndex) => (
                                      <>
                                        <input
                                          type="checkbox"
                                          id={`Chapter-${chapterIndex}`}
                                          name="Chapter"
                                          value={chapter.id}
                                          onChange={() => setChapterId(chapter.id)}
                                          defaultChecked={chapterIndex === 0}
                                        />
                                        <label htmlFor={`Chapter-${chapterIndex}`}>
                                          <h4>{chapter.chapter}</h4>
                                        </label>

                                        {question && question?.length > 0 ? (
                                          question?.map((questionItem, questionIndex) => (
                                            <div className="form-check" key={questionIndex}>
                                              <input
                                                type="radio"
                                                className="form-check-input"
                                                id={"radio" + chapterSubjectIndex + "_" + questionIndex}
                                                name={"noOfQuestion" + chapterSubjectIndex}
                                                value={questionItem.id}
                                                onChange={() => {
                                                  setNoOfQuestion(questionItem.no_of_questions);
                                                  setTimeLimit(questionItem.quiz_time);
                                                }}
                                                defaultChecked={questionIndex === 0}
                                              />{" "}
                                              {questionItem.no_of_questions}{" "}
                                              Question Quiz
                                              <label
                                                className="form-check-label"
                                                htmlFor={"radio8" + questionIndex}
                                              ></label>
                                            </div>
                                          ))
                                        ) : (
                                          <tr>
                                            <td colSpan="12">No Data Found</td>
                                          </tr>
                                        )}
                                      </>
                                    ))
                                  ) : (
                                    <tr>
                                      <td colSpan="12">No Data Found</td>
                                    </tr>
                                  )}

                                  {/* <Link className={`btn btn-primary ${bgColors[i % bgColors.length]} animate-btn mt-3 w-100`} onClick={handleSubmit}>Start Exam</Link> */}
                                  <button
                                    className={`btn btn-primary ${bgColors[chapterSubjectIndex % bgColors.length]} animate-btn mt-3 w-100`}
                                    onClick={handleSubmit}
                                  >
                                    Start Exam
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="12">No Data Found</td>
                          </tr>
                        )}

                                                
                      
                      </div>
                    </div>
                  </div>
                </div>
              </section> 
            </>
          );
}
export default SubjectClass;