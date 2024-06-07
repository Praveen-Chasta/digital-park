import React, { useState, useEffect } from 'react'
import logo from "../../../asset/images/digital-edu-park-logo.webp"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpReducer, togglesuccess } from './RegisterSlice';
import { Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';
import { SERVER_URL } from "../../../config"

const BASE_URL = SERVER_URL;
function SignUp() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    let success = useSelector((state) => state.register.success);
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [classes, setClasses] = useState([]);
    const [classesId, setClassesId] = useState('');

    const {loader} = useSelector(state=>state.register);
    
    useEffect(() => {
        axios.get(`${BASE_URL}/categories`)
            .then(response => {
                setCategory(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching categories: ', error);
            });
    }, []);

    useEffect(() => {
        if (categoryId) {
            axios.post(`${BASE_URL}/classes`, { category: categoryId })
                .then(response => {
                    setClasses(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching classes: ', error);
                });
        }
    }, [categoryId]);

    const handleCategoryChange = (e) => {
        setCategoryId(e.target.value);
        // Clear classesId when category changes
        setClassesId('');
    };

    useEffect(() => {
        if(success)
            {
            setTimeout(()=>{
                const closeButton = document.getElementById('closeButton');
                if (closeButton) 
                  {
                     closeButton.click()
                  }
              },100);
             
            }
     }, [success]);
    const overrideStyle ={
        display:'flex',
        margin:'0 auto',
        height:'24px',
        justifyContent:'center',
        alignItem:'center',
      }
    return (
        <div className="modal fade" id="signUpPopup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg p-5">
                <div className="modal-content">
                    <div className="modal-body">


                        <button id="closeSignUpButton" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <center><img src={logo} alt="Digitaledupark" /></center>
                        <p>Create your account</p>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                user_name: "",
                                full_name: "",
                                contact_number: "",
                                class: "",
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
                                //console.log(values);
                                dispatch(
                                    signUpReducer({
                                        email: values.email,
                                        password: values.password,
                                        full_name: values.full_name,
                                        user_name: values.user_name,
                                        contact_number: values.contact_number,
                                        class: values.class,
                                    })
                                ).then((data) => {
                                    // console.log(data);
                                    if (data?.payload?.status === true) {
                                        dispatch(togglesuccess(true));
                                        setTimeout(() => {
                                            navigate("/", {
                                                replace: true,
                                            });
                                        }, 500);
                                    } else {
                                        dispatch(togglesuccess(false));
                                        setError(data?.payload?.error.message);
                                        setTimeout(() => {
                                            setError("");
                                        }, 1000);
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
                                            <div className="row">
                                                <div className="col-md-6">

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



                                                <div className="col-md-6">

                                                    <label>Password</label>
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        className="form-control"
                                                        placeholder="Enter Password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                        required
                                                    />
                                                    {/* Toggle button to show/hide password */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <div className="input-container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Full Name</label>
                                                    <input
                                                        type="text"
                                                        id="full_name"
                                                        className="form-control"
                                                        placeholder="Enter Full Name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.full_name}
                                                        required
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <label>User Name</label>
                                                    <input
                                                        type="text"
                                                        id="user_name"
                                                        className="form-control"
                                                        placeholder="Enter User Name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.user_name}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-container">
                                            <label>Contact Number</label>
                                            <input
                                                pattern="[0-9]{10}"
                                                title="Please enter a valid 10-digit phone number"
                                                type="tel"
                                                id="contact_number"
                                                className="form-control"
                                                placeholder="Contact Number"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.contact_number}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="category">Category</label>
                                                    <select
                                                        className="form-control"
                                                        id="category"
                                                        onChange={handleCategoryChange}
                                                        value={categoryId}
                                                    >
                                                        <option value="">Select a category</option>
                                                        {category.map((cat) => (
                                                            <option key={cat.id} value={cat.id}>
                                                                {cat.category}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>


                                                <div className="col-md-6">
                                                    <label htmlFor="class">Class</label>
                                                    <select
                                                        className="form-control"
                                                        id="class"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.class}
                                                    >
                                                        <option value="">Select a class</option>
                                                        {classes && classes.map((data) => (
                                                            <option key={data.class_id} value={data.class_id}>
                                                                {data.class_name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit"  disabled={loader ? true : false}  className={`btn btn-primary ${loader ? "pb-4" : ""}`} >
                                    {
                                        loader ? <PropagateLoader color='#fff' cssoverride = {overrideStyle} /> : 'Sign Up'
                                    }

                                    </button>
                                    {/* <p>Already have an account? <Link  >Log In</Link></p> */}
                                    <p>Already have an account? <Link data-bs-toggle="modal" data-bs-target="#loginPopup" aria-label="Login">Login</Link></p>


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

export default SignUp
