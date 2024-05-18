
import React, { useState, useEffect } from 'react'
import logo from "../../../asset/images/digital-edu-park-logo.webp"
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginReducer, togglesuccess } from './LoginSlice';
function Login() {

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  let success = useSelector((state) => state.login.success);

  useEffect(() => {
    if (success) {
      // If success is true, trigger the click event on the close button
      const closeButton = document.getElementById('closeButton');
      if (closeButton) {
        closeButton.click();
      }
    }
  }, [success]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



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
                ).then((data) => {
                  if (data?.payload?.status === true) {
                    dispatch(togglesuccess(true));
                    setTimeout(() => {
                      navigate("/", {
                        replace: true
                      });
                    }, 3000);
                  } else {
                    dispatch(togglesuccess(false));
                    setError(data?.payload?.error.message);
                    setTimeout(() => {
                      setError("");
                    }, 3000);
                  }
                });
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
                      <label>Password</label>
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="form-control"
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


                  <button type="submit" className="btn btn-primary" >Login</button>
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