import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../../config"
import { ErrorMessage } from "formik";
const BASE_URL = SERVER_URL;

const initialState = {
  email: "",
  success: false,
  initialUser: "",
  userInfo:[],
  successStatus: ''
};





export const loginReducer = createAsyncThunk(
  "loginReducer",
  async (obj, { getState }) => {

    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email: obj.email,
        password: obj.password,

      });

      await localStorage.setItem("token", response?.data?.data?.remember_token || null);
      return response?.data;
    } catch (error) {
      // dispatch({ type: "LOGIN_FAILURE", });
      return error?.message;
    }
  }
);



export const logoutReducer = createAsyncThunk(
  "logoutReducer",
  async (obj, { getState }) => {

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${BASE_URL}/logout`, {}, {
          headers: {
              'remember-token': token,
          },
      });
      return response?.data;
    } catch (error) {
      // dispatch({ type: "LOGIN_FAILURE", });
      return error?.message;
    }
  }
);


export const LoginSlice = createSlice({
  name: "login",
  initialState:
  {
    successMessage : '',
    errorMessage: '',
    loader:false,
    userInfo: '',
    success:'',
  },
  reducers: {
    togglesuccess: (state, action) => {
      state.success = action?.payload;
    },
    [loginReducer.fulfilled]: (state, action) => {
      state.initialUser = action?.payload?.data.remember_token;
      state.userInfo = action?.payload?.data?.data;
    }
    
   
  },
  extraReducers:(builder)=>{
      builder
      .addCase(loginReducer.pending,(state,{payload})=>{
          state.loader = true;
      })
      .addCase(loginReducer.rejected,(state,{payload})=>{
        state.loader = false;
        state.errorMessage = payload.error;
    })
    .addCase(loginReducer.fulfilled,(state,{payload})=>{
      state.loader = false;
      state.successMessage = payload.message;
      state.successStatus = payload.status;
      localStorage.setItem("user_name", payload.data?.user_name);
      state.userInfo = payload.data; // Assuming action.payload contains user data

  })
  builder
      .addCase(logoutReducer.fulfilled,(state,{payload})=>{
        state.initialUser = null;
        state.successMessage = '';
        state.errorMessage= '';
        state.loader=false;
        state.userInfo= '';
        state.success='';
      })

 

  }

});

export const { togglesuccess, logout} = LoginSlice.actions;
export default LoginSlice.reducer;
