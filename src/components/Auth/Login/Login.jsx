
import React, { useState,useCallback, useEffect, useLayoutEffect } from 'react'
import logo from "../../../asset/images/digital-edu-park-logo.webp"
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginReducer, togglesuccess,messageClear } from './LoginSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PropagateLoader } from 'react-spinners';
import {startExamReducer} from "../../../admin/exam/ExamSlice.jsx"
import './login.css';
import axios from 'axios';
import { SERVER_URL } from '../../../config/index.js';
const BASE_URL =SERVER_URL;
function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();
  const {loader} = useSelector(state=>state.login);
  let success = useSelector((state) => state.login.success);
  let successStatus = useSelector((state) => state.login.successStatus);
  let userInfo = useSelector((state) => state.login.userInfo);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

const overrideStyle ={
  display:'flex',
  margin:'0 auto',
  height:'24px',
  justifyContent:'center',
  alignItem:'center',
}



// const getStartExam = useCallback(async () => {
//   try {
//     let params = {};

//     if (userInfo && userInfo.quiz_id !== undefined) {
//       params.class=  userInfo.class_id;
//       params.subject=  userInfo.subjectId;
//       params.chapter=  userInfo.ChapterId;
//       params.difficulty_level= userInfo.Difficulty;
//       params.no_of_question= userInfo.no_of_question;
//       params.duration= userInfo.duration;
//     }

//     dispatch(startExamReducer(params));
//     navigate('/exam', {
//       state: 
//         { 
//               id: userInfo.class_id , 
//                subjectId: userInfo.subjectId, 
//                ChapterId:userInfo.ChapterId,
//                timeLimit:userInfo.duration, 
//                Difficulty:userInfo.Difficulty, 
//                no_of_question:userInfo.no_of_question
//                quizData, startExam
//         }
//     });
//   } catch (error) {
//     console.error("Failed to fetch quiz questions:", error);
//   }
// }, [dispatch,]);


let [ startExam, setStartExam] =  useState([]);
    

    // const initiateExam = async () =>{
    //   try {

    //         let params = {};

    // if (userInfo && userInfo.quiz_id !== undefined) {
    //   params.class=  userInfo.class_id;
    //   params.subject=  userInfo.subjectId;
    //   params.chapter=  userInfo.ChapterId;
    //   params.difficulty_level= userInfo.Difficulty;
    //   params.no_of_question= userInfo.no_of_question;
    //   params.duration= userInfo.duration;
    // }
    //     const token = await localStorage.getItem('token');
    //     const response = await axios.post(`${BASE_URL}/start-exam`, 
    //       params, {
    //       headers: {
    //         'remember-token': token,
    //       }
    //     });

    //     setStartExam(response.data);
    //     return response.data;
    //   } catch (error) {
    //     throw new Error(error.response?.data?.message || error.message);
    //   }
    // }

    
    const getStartExam = async () => {
      let params= {};
    
      if (userInfo && userInfo.quiz_id !== undefined) {
        params.quiz_id = userInfo.quiz_id;
        params.questions = userInfo.questions;
      }
    
      // dispatch(quizQuestionsReducer(params)); // Dispatch action to update quiz questions state
      
      try {
        const token = userInfo.remember_token;
        const response = await axios.post(`${BASE_URL}/questions`, 
          params
        
        , {
          headers: {
            'remember-token': token,
          }
        });
        // console.log("slice data")

        // setQuizData( response?.data?.data);
        const quizData = response?.data?.data;
        navigate('/exam', {
          state: { id: userInfo.class_id , 
                           subjectId: userInfo.subjectId, 
                           ChapterId:userInfo.ChapterId,
                           timeLimit:userInfo.duration, 
                           Difficulty:userInfo.Difficulty, 
                           no_of_question:userInfo.no_of_question,
             quizData, startExam }
        });
        // return response?.data;
      } catch (error) {
        return error?.message;
      }
      
    };
    

useEffect(() => {
  if (success) {
    const closeButton = document.getElementById('closeButton');
    if (closeButton) {
      closeButton.click();
    }

    console.log(userInfo);
    if (userInfo && userInfo.quiz_id) {
      getStartExam();
    } else {
      navigate("/", { replace: true });
    }
  }

  if (successStatus === true) {
    notify();
  }


}, [success, userInfo, getStartExam, navigate]);



const notify = () => toast.success("Login Successfully!",
  {
    position: "top-center",
  });

  
const notifyError = () => toast.error("Login Failed!",
  {
    position: "top-left",
  });

  return (

    <div className="modal fade" id="loginPopup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button id="closeButton" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <center><img src={logo} alt="Digitaledupark" /></center>
            <p>Enter your email to sign in</p>
            <Formik
              initialValues={{
                email: "",
                password: "",
                toggle: false,
                error: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Email must be valid email id.")
                  .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/, "Email must be a valid email id with a valid domain.")
                  .required("Required"),
                password: Yup.string().required("Required"),
              })}
              onSubmit={(values, { isSubmitting, resetForm }) => {
                setLoading(true);
                dispatch(
                  loginReducer({
                    email: values.email,
                    password: values.password,
                  })
                ) 
                .then((data) => {
                  if (data?.payload?.status === true) {
                    dispatch(togglesuccess(true));
                    
                    setTimeout(() => {
                      navigate("/", {
                        replace: true
                      });
                    }, 1000);
                  } else {
                    dispatch(togglesuccess(false));
                    notifyError();
                    setError(data?.payload?.error.message);
                    setTimeout(() => {
                      setError("");
                    }, 1000);
                  }
                });
                //.then((data) => {
                //   if (data?.payload?.status === true) {
                //     dispatch(togglesuccess(true));
                //     setTimeout(() => {
                //       navigate("/", {
                //         replace: true
                //       });
                //     }, 1000);
                //   } else {
                //     dispatch(togglesuccess(false));
                //     setError(data?.payload?.error.message);
                //     setTimeout(() => {
                //       setError("");
                //     }, 1000);
                //   }
                // });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFormikState,
              }) => (

                <form
                  className="form-style"
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSubmit();
                  }}
                >

                  <div className="form-group">
                    <div className="input-container">
                      <label>Email</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-container">
                      <label className="mt-3">Password</label>
                      <div className="password-input">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="form-control-1"
                          placeholder="Enter Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          required
                        />
                        <i
                          className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                          onClick={togglePasswordVisibility}
                        >
                        </i>
                      </div>
                    </div>
                  </div>


                  <button  disabled={loader ? true : false}   className={`btn btn-primary ${loader ? "pb-4" : ""}`} type='submit'>
                      {
                        loader ? <PropagateLoader color='#fff' cssoverride = {overrideStyle} /> : 'Login'
                      }
                    </button>
                    <ToastContainer />
                  {/* <p>Don't have an account? <Link  >Sign Up</Link></p> */}
                  <p>Don't have an account? <Link data-bs-target="#signUpPopup" data-bs-toggle="modal" aria-label="Sign Up" >Sign Up</Link></p>

                  {/* {error && (
				<div style={{textAlign: 'center', color: 'red', backgroundColor: 'mistyrose', padding: '10px'}}>
					{error}
				</div>
				)} */}


                  {error && (
                    <div
                      className={
                        success
                          ? "col-sm-12 col-md-12 alert alert-success text-center mt-2 text-capitalize"
                          : "col-sm-12 col-md-12 alert alert-danger text-center mt-2 text-capitalize"
                      }
                    >
                      {error}
                    </div>
                  )}

                  {successMessage && (
                    <div className="col-sm-12 col-md-12 alert alert-success text-center mt-2 text-capitalize">
                      {successMessage}
                    </div>
                  )}

                  
                  {touched.email && errors.email ? (
                      <div className={
                          success
                              ? "col-sm-12 col-md-12 alert alert-success text-center mt-2 text-capitalize"
                              : "col-sm-12 col-md-12 alert alert-danger text-center mt-2 text-capitalize"
                      }>{errors.email}</div>
                  ) : null}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
