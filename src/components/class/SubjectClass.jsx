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
  const [noOfQuestion , setNoOfQuestion] = useState('');
  const [chapterNoOfQuestion , setChapterNoOfQuestion] = useState('');
  const [subjectId , setSubjectId] = useState(0);
  const [ChapterId , setChapterId] = useState(0);
  const [chapterSubjectId , setChapterSubjectId] = useState(0);
  const [timeLimit , setTimeLimit] = useState(0);


  console.log(chapterNoOfQuestion);

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
    let no_of_question = chapterNoOfQuestion ? chapterNoOfQuestion : noOfQuestion;
    const navigate = useNavigate();
    const handleSubmit = () => {
    
        if (!user) {
          const loginModal = new window.bootstrap.Modal(document.getElementById('loginPopup'));
          loginModal.show();
        }else{
          navigate(`/dashboard/instruction1/${id}/${subjectId}/${ChapterId}/${timeLimit}/${Difficulty}/${no_of_question}`)
        }
    };

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
                            data?.map((item, i) => (
                              <div className="accordion-item" key={i}>
                              <div className="accordion-header" id={"heading_"+i}>
                                <button className={`accordion-button ${bgColors[i % bgColors.length]}`} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_"+i} aria-expanded="false" aria-controls={"collapse_"+i} onClick={() => setSubjectId(item.subject_id)}>
                                {item.subject_name}
                                </button>
                              </div>
                              <div id={"collapse_"+i} className="accordion-collapse collapse" aria-labelledby={"heading_"+i} data-bs-parent="#accordionQuiz">
                                <div className="accordion-body">

                                {question && question?.length > 0 ? (
                            question?.map((item, i) => (
                                <div className="form-check" key={i}>
                                    <input type="radio" className="form-check-input" id={"radio7" + i} name="chapterNoOfQuestion" value={item.id}  onChange={() => {setChapterNoOfQuestion(item.no_of_questions); setTimeLimit(item.quiz_time);}}/> {item.no_of_questions}{" Question Quiz"}
                                    <label className="form-check-label" htmlFor={"radio7" + i}></label>
                                  </div>
                              ))
                              ) : (
                                <tr>
                                  <td colSpan="12">No Data Found</td>
                                </tr>
                              )}

                              
                                   {/* <Link to='/dashboard/instruction1' className={`btn btn-primary ${bgColors[i % bgColors.length]} animate-btn mt-3 w-100`}>Start Exam</Link> */}

                                <button className={`btn btn-primary ${bgColors[i % bgColors.length]} animate-btn mt-3 w-100`} onClick={handleSubmit}>Start Exam</button>
                                  
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
                            chapter?.map((item, i) => (
                              <div className="accordion-item"  key={i}>
                              <div className="accordion-header" id={"heading_2"+i}>
                                <button className={`accordion-button ${bgColors[i % bgColors.length]}`} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_21"+i} aria-expanded="false" aria-controls={"collapse_21"+i} onClick={() => setChapterSubjectId(item.subject_id)}>
                                {item.subject_name}
                                </button>
                              </div>
                              <div id={"collapse_21"+i} className="accordion-collapse collapse" aria-labelledby={"heading_21"+i} data-bs-parent="#accordionQuiz">
                                <div className="accordion-body">
                                {item.chapters && item.chapters?.length > 0 ? (
                            item.chapters?.map((data, i) => (
                              <>
                              <input
                                type="checkbox"
                                id={`Chapter-${i}`}
                                name="Chapter"
                                onChange={() => setChapterId(data.id)}
                              />
                              <label htmlFor={`Chapter-${i}`}><h4>{data.chapter}</h4></label>

                              {question && question?.length > 0 ? (
                            question?.map((item, i) => (
                                <div className="form-check" key={i}>
                                    <input type="radio" className="form-check-input" id={"radio7" + i} name="noOfQuestion" value={item.id}  onChange={() => { setNoOfQuestion(item.no_of_questions); setTimeLimit(item.quiz_time);}} /> {item.no_of_questions}{" Question Quiz"}
                                    <label className="form-check-label" htmlFor={"radio7" + i}></label>
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
                                  <button className={`btn btn-primary ${bgColors[i % bgColors.length]} animate-btn mt-3 w-100`} onClick={handleSubmit}>Start Exam</button>
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