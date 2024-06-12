import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../../config"
import { ErrorMessage } from "formik";

const BASE_URL = SERVER_URL;

const initialState = {
  email: "",
  success: false,
  initialUser: "",
  userInfo:[]
};





export const loginReducer = createAsyncThunk(
  "loginReducer",
  async (obj, { getState }) => {

    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email: obj.email,
        password: obj.password,

      });

      await localStorage.setItem("token", response?.data?.data?.remember_token);
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
    success:''
  },
  reducers: {
    togglesuccess: (state, action) => {
      state.success = action?.payload;
    },
    [loginReducer.fulfilled]: (state, action) => {
      state.initialUser = action?.payload?.data.remember_token;
      state.userInfo = action?.payload?.data?.data;
    },
    
   
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
      localStorage.setItem("user_name", payload.data?.user_name);
      state.userInfo = payload.data; // Assuming action.payload contains user data

  })

  }

});

export const { togglesuccess } = LoginSlice.actions;
export default LoginSlice.reducer;
