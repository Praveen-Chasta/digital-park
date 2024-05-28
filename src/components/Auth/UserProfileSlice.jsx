import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../config";

const BASE_URL = SERVER_URL;

// console.log(BASE_URL);
const initialState = {
    data:[],
    success: false,
};

export const profileReducer = createAsyncThunk(
    "profileReducer",
    async (obj, { getState }) => {
        const token = await localStorage.getItem("token");
    try {
      const response = await axios.get(`${BASE_URL}/student-details`, {
        
        headers: {
            remember_token: token,
        },
      });
      // console.log("Slice list Data",{response});
      // await localStorage.setItem("token", response?.data?.token)
      return response?.data;
    } catch (error) {
      return error?.message;
    }
  }
  );

 

  export const UserProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
      reducerName: (state, action) => {},
    },
    extraReducers: (builder) => {
      builder
        .addCase(profileReducer.fulfilled, (state, action) => {
        //   console.log("dddd", action?.payload?.data);
          state.data = action?.payload?.data;
        });
    
    
    },
  });
  
  export const { reducerName } = UserProfileSlice.actions;
  
  export default UserProfileSlice.reducer;



