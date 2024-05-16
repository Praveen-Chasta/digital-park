import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../../config"

const BASE_URL = SERVER_URL;

const initialState = {
  email: "",
  success: false,
  initialUser: ""
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
  initialState,
  reducers: {
    togglesuccess: (state, action) => {
      state.success = action?.payload;
    },
    [loginReducer.fulfilled]: (state, action) => {
      state.initialUser = action?.payload?.data.remember_token;
    },

  },

});

export const { togglesuccess } = LoginSlice.actions;

export default LoginSlice.reducer;
