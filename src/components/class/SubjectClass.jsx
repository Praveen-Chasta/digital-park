import React,{useState, useCallback, useEffect} from "react";
import { Link, useParams  } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { subjectReducer, chapterReducer, noOfQuestionReducer } from "./SubjectClassSlice";

import { SERVER_URL } from "../../config";

const BASE_URL = SERVER_URL;

const SubjectClass=()=>{

  const { id } = useParams();
  const [label, setLabel] = useState([]);

  const [subjectDifficulty , setSubjectDifficulty] = useState('');
  const [chapterDifficulty , setChapterDifficulty] = useState('');
  const [noOfQuestion , setNoOfQuestion] = useState('');
  const [chapterNoOfQuestion , setChapterNoOfQuestion] = useState('');


  const data = useSelector((state) => state.subjectClass.data);
  const chapter = useSelector((state) => state.subjectClass.chapters);
  const question = useSelector((state) => state.subjectClass.no_of_question);

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
        subject: 1,
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
                                  value={data.name}
                                  checked={subjectDifficulty === data.name} 
                                  onChange={() => setSubjectDifficulty(data.name)}
                                />
                                <label className="form-check-label" htmlFor={"radio" + index}>
                                  {data.name}
                                </label>
                              </div>
                            </li>
                          ))}
                      
                      </ul>

                      {data && data?.length > 0 ? (
                            data?.map((item, i) => (
                              <div className="accordion-item" key={i}>
                              <div className="accordion-header" id={"heading_"+i}>
                                <button className={`accordion-button ${bgColors[i % bgColors.length]}`} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_"+i} aria-expanded="true" aria-controls={"collapse_"+i}>
                                {item.subject_name}
                                </button>
                              </div>
                              <div id={"collapse_"+i} className="accordion-collapse collapse show" aria-labelledby={"heading_"+i} data-bs-parent="#accordionQuiz">
                                <div className="accordion-body">

                                {question && question?.length > 0 ? (
                            question?.map((item, i) => (
                                <div className="form-check" key={i}>
                                    <input type="radio" className="form-check-input" id={"radio7" + i} name="chapterNoOfQuestion" value={item.id}  onChange={() => setChapterNoOfQuestion(item.id)}/> {item.no_of_questions}{" Question Quiz"}
                                    <label className="form-check-label" htmlFor={"radio7" + i}></label>
                                  </div>
                              ))
                              ) : (
                                <tr>
                                  <td colSpan="12">No Data Found</td>
                                </tr>
                              )}

                                {/* <div className="form-check">
                                  <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                                  <label className="form-check-label" htmlFor="radio5"></label>
                                </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1"/> 20 Question Quiz
                                    <label className="form-check-label" htmlFor="radio6"></label>
                                  </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                                    <label className="form-check-label" htmlFor="radio7"></label>
                                  </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                                    <label className="form-check-label" htmlFor="radio8"></label>
                                  </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                                    <label className="form-check-label" htmlFor="radio9"></label>
                                  </div> */}
                                   <Link to='/dashboard/instruction1' className={`btn btn-primary ${bgColors[i % bgColors.length]} animate-btn mt-3 w-100`}>Start Exam</Link>

                                {/* <button className={`btn btn-primary ${bgColors[i % bgColors.length]} animate-btn mt-3 w-100`}>Start Exam</button> */}
                                  
                                </div>
                              </div>
                              </div>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="12">No Data Found</td>
                            </tr>
                          )}
                      
                        {/* <div className="accordion-item">
                        <div className="accordion-header" id="heading_2">
                          <button className="accordion-button collapsed green" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                          Mathematics
                          </button>
                        </div>
                        <div id="collapse_2" className="accordion-collapse collapse" aria-labelledby="heading_2" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" htmlFor="radio5"></label>
                          </div>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_3">
                          <button className="accordion-button collapsed blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                          Science
                          </button>
                        </div>
                        <div id="collapse_3" className="accordion-collapse collapse" aria-labelledby="heading_3" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" htmlFor="radio5"></label>
                          </div>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_4">
                          <button className="accordion-button collapsed yallow" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                          Hindi Grammar
                          </button>
                        </div>
                        <div id="collapse_4" className="accordion-collapse collapse" aria-labelledby="heading_4" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" htmlFor="radio5"></label>
                          </div>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1"/> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_5">
                          <button className="accordion-button collapsed red" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="true" aria-controls="collapse_5">
                          Social Science
                          </button>
                        </div>
                        <div id="collapse_5" className="accordion-collapse collapse" aria-labelledby="heading_5" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" htmlFor="radio5"></label>
                          </div>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1"/> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            
                          </div>
                        </div>
                        </div>	 */}
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
                                  value={data.name}
                                  checked={chapterDifficulty === data.name} 
                                  onChange={() => setChapterDifficulty(data.name)}
                                />
                                <label className="form-check-label" htmlFor={"radio2" + index}>
                                  {data.name}
                                </label>
                              </div>
                            </li>
                          ))}
                      </ul>
                        
                      {chapter && chapter?.length > 0 ? (
                            chapter?.map((item, i) => (
                              <div className="accordion-item"  key={i}>
                              <div className="accordion-header" id={"heading_2"+i}>
                                <button className={`accordion-button ${bgColors[i % bgColors.length]}`} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_21"+i} aria-expanded="true" aria-controls={"collapse_21"+i}>
                                {item.subject_name}
                                </button>
                              </div>
                              <div id={"collapse_21"+i} className="accordion-collapse collapse show" aria-labelledby={"heading_21"+i} data-bs-parent="#accordionQuiz">
                                <div className="accordion-body">
                                {item.chapters && item.chapters?.length > 0 ? (
                            item.chapters?.map((data, i) => (
                              <>
                              <h4 key={i}>{data.chapter}</h4>

                              {question && question?.length > 0 ? (
                            question?.map((item, i) => (
                                <div className="form-check" key={i}>
                                    <input type="radio" className="form-check-input" id={"radio7" + i} name="noOfQuestion" value={item.id}  onChange={() => setNoOfQuestion(item.id)}/> {item.no_of_questions}{" Question Quiz"}
                                    <label className="form-check-label" htmlFor={"radio7" + i}></label>
                                  </div>
                              ))
                              ) : (
                                <tr>
                                  <td colSpan="12">No Data Found</td>
                                </tr>
                              )}

                                  {/* <div className="form-check">
                                  <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                                  <label className="form-check-label" htmlFor="radio5"></label>
                                </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                                    <label className="form-check-label" htmlFor="radio6"></label>
                                  </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                                    <label className="form-check-label" htmlFor="radio7"></label>
                                  </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                                    <label className="form-check-label" htmlFor="radio8"></label>
                                  </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                                    <label className="form-check-label" htmlFor="radio9"></label>
                                  </div> */}
                                  </>
                                  
                                ))
                              ) : (
                                <tr>
                                  <td colSpan="12">No Data Found</td>
                                </tr>
                              )}
                                  
                                  {/* <h4 className="mt-3">Chapter 2</h4>
                                  
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                                    <label className="form-check-label" htmlFor="radio6"></label>
                                  </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                                    <label className="form-check-label" htmlFor="radio7"></label>
                                  </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                                    <label className="form-check-label" htmlFor="radio8"></label>
                                  </div>
                                  <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                                    <label className="form-check-label" htmlFor="radio9"></label>
                                  </div> */}
                                  <Link to='/dashboard/instruction1' className={`btn btn-primary ${bgColors[i % bgColors.length]} animate-btn mt-3 w-100`}>Start Exam</Link>
                                  {/* <button >Start Exam</button> */}
                                </div>
                              </div>
                              </div>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="12">No Data Found</td>
                            </tr>
                          )}
                        {/* <div className="accordion-item">
                        <div className="accordion-header" id="heading_21">
                          <button className="accordion-button blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_21" aria-expanded="true" aria-controls="collapse_21">
                          English Grammar
                          </button>
                        </div>
                        <div id="collapse_21" className="accordion-collapse collapse show" aria-labelledby="heading_21" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                            <h4>Chapter 1</h4>
                            <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" htmlFor="radio5"></label>
                          </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            <h4 className="mt-3">Chapter 2</h4>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            
                            <button className="btn btn-primary blue animate-btn mt-3 w-100">Start Exam</button>
                          </div>
                        </div>
                        </div> */}
                        {/* <div className="accordion-item">
                        <div className="accordion-header" id="heading_22">
                          <button className="accordion-button collapsed green" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_22" aria-expanded="false" aria-controls="collapse_22">
                          Mathematics
                          </button>
                        </div>
                        <div id="collapse_22" className="accordion-collapse collapse" aria-labelledby="heading_22" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <h4>Chapter 1</h4>
                            <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" htmlFor="radio5"></label>
                          </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            <h4 className="mt-3">Chapter 2</h4>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            
                            <button className="btn btn-primary blue animate-btn mt-3 w-100">Start Exam</button>
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_23">
                          <button className="accordion-button collapsed blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_23" aria-expanded="false" aria-controls="collapse_23">
                          Science
                          </button>
                        </div>
                        <div id="collapse_23" className="accordion-collapse collapse" aria-labelledby="heading_23" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <h4>Chapter 1</h4>
                            <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" htmlFor="radio5"></label>
                          </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            <h4 className="mt-3">Chapter 2</h4>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            
                            <button className="btn btn-primary blue animate-btn mt-3 w-100">Start Exam</button>
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_24">
                          <button className="accordion-button collapsed yallow" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_24" aria-expanded="false" aria-controls="collapse_24">
                          Hindi Grammar
                          </button>
                        </div>
                        <div id="collapse_24" className="accordion-collapse collapse" aria-labelledby="heading_24" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <h4>Chapter 1</h4>
                            <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" htmlFor="radio5"></label>
                          </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            <h4 className="mt-3">Chapter 2</h4>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            
                            <button className="btn btn-primary blue animate-btn mt-3 w-100">Start Exam</button>
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_25">
                          <button className="accordion-button collapsed red" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_25" aria-expanded="true" aria-controls="collapse_25">
                          Social Science
                          </button>
                        </div>
                        <div id="collapse_25" className="accordion-collapse collapse" aria-labelledby="heading_25" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <h4>Chapter 1</h4>
                            <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" htmlFor="radio5"></label>
                          </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" htmlFor="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            <h4 className="mt-3">Chapter 2</h4>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" htmlFor="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" htmlFor="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" htmlFor="radio9"></label>
                            </div>
                            
                            <button className="btn btn-primary blue animate-btn mt-3 w-100">Start Exam</button>
                          </div>
                        </div>
                        </div>	 */}
                      </div>
                    </div>
                  </div>
                </div>
              </section> 
            </>
          );
}
export default SubjectClass;