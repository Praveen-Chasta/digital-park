import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../../config";

const BASE_URL = SERVER_URL;

// console.log(BASE_URL);
const initialState = {
  success: false,
};

export const signUpReducer = createAsyncThunk(
    "signUpReducer",
    async (obj, { getState }) => {
      try {
        const response = await axios.post(`${BASE_URL}/register`, {
          email: obj.email,
          password: obj.password,
          full_name: obj.full_name,
          contact_number: obj.contact_number,
          user_name: obj.user_name,
          class: obj.class,
        });
  
        return response?.data;
      } catch (error) {
        return error?.message;
      }
    }
  );
  


export const RegisterSlice = createSlice({
  name: "register",
  initialState:{
    loader:false,
    success:false,
  },
  reducers: {
    togglesuccess: (state, action) => {
      state.success = action?.payload;
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(signUpReducer.pending,(state,{payload})=>{
        state.loader = true;
    })
    .addCase(signUpReducer.rejected,(state,{payload})=>{
      state.loader = false;
      state.errorMessage = payload.error;
  })
  .addCase(signUpReducer.fulfilled,(state,{payload})=>{
    state.loader = false;
    state.successMessage = payload.message;
})

}

});

export const { togglesuccess } = RegisterSlice.actions;

export default RegisterSlice.reducer;
