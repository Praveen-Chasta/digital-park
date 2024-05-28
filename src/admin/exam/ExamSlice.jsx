import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../config";

const BASE_URL = SERVER_URL;

// console.log(BASE_URL);
const initialState = {
    examQuestions:[],
    
    success: false,
};


  export const quizQuestionsReducer = createAsyncThunk(
    "quizQuestionsReducer",
    async (obj, { getState }) => {
      try {

        console.log("dskjsbkjb");
        const response = await axios.post(`${BASE_URL}/questions`, {
        class: obj.class,
        subject: obj.subject,
        chapter: obj.chapter,
        difficulty_label: obj.difficulty_label,
        });
        // console.log("slice data")
        // console.log("slice data",response.data)
        return response?.data;
      } catch (error) {
        return error?.message;
      }
    }
  );
  

  


  export const ExamSlice = createSlice({
    name: "quizQuestions",
    initialState,
    reducers: {
      reducerName: (state, action) => {},
    },
    extraReducers: (builder) => {
      builder
        .addCase(quizQuestionsReducer.fulfilled, (state, action) => {
        //   console.log("dddd", action?.payload?.data);
          state.examQuestions = action?.payload.data;
        });
   
    },
  });
  
  export const { reducerName } = ExamSlice.actions;
  
  export default ExamSlice.reducer;



