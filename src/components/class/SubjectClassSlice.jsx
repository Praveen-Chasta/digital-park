import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../config";

const BASE_URL = SERVER_URL;

// console.log(BASE_URL);
const initialState = {
    data:[],
    chapters: [],
    no_of_question:[],
    success: false,
    classCategories:[]
};

export const subjectReducer = createAsyncThunk(
    "subjectReducer",
    async (obj, { getState }) => {
      try {
        const response = await axios.post(`${BASE_URL}/class-subjects`, {
        class: obj.class,
        // class: 1,
        });
        // console.log("slice data",response?.data.data)
        return response?.data;
      } catch (error) {
        return error?.message;
      }
    }
  );

  export const chapterReducer = createAsyncThunk(
    "chapterReducer",
    async (obj, { getState }) => {
      try {
        const response = await axios.post(`${BASE_URL}/class-subject-chapters`, {
        class: obj.class,
        // subject: obj.subject,
        });
        // console.log("slice data",response?.data.data)
        return response?.data;
      } catch (error) {
        return error?.message;
      }
    }
  );
  

  
export const noOfQuestionReducer = createAsyncThunk(
  "noOfQuestionReducer",
  async (obj, { getState }) => {
    try {
      const response = await axios.get(`${BASE_URL}/quiz-setting`);
      // console.log("slice data",response?.data.data)
      return response?.data;
    } catch (error) {
      return error?.message;
    }
  }
);


  export const categoriesClassReducer = createAsyncThunk(
    "categoriesClassReducer",
    async (obj, { getState }) => {
      try {
        const response = await axios.get(`${BASE_URL}/categories-class`);
        // console.log("slice data",response?.data.data)
        return response?.data;
      } catch (error) {
        return error?.message;
      }
    }
  );

  export const SubjectClassSlice = createSlice({
    name: "subjectClass",
    initialState,
    reducers: {
      reducerName: (state, action) => {},
    },
    extraReducers: (builder) => {
      builder
        .addCase(subjectReducer.fulfilled, (state, action) => {
        //   console.log("dddd", action?.payload?.data);
          state.data = action?.payload?.data;
        });
    builder
    .addCase(chapterReducer.fulfilled, (state, action) => {
      // console.log("dddd", action?.payload?.data);
        state.chapters = action?.payload?.data;
    });
    builder
    .addCase(noOfQuestionReducer.fulfilled, (state, action) => {
      // console.log("dddd", action?.payload?.data);
        state.no_of_question = action?.payload?.data;
    });
    builder
    .addCase(categoriesClassReducer.fulfilled, (state, action) => {
      // console.log("dddd", action?.payload?.data);
        state.classCategories = action?.payload?.data;
    });
    },
  });


  
  export const { reducerName } = SubjectClassSlice.actions;
  
  export default SubjectClassSlice.reducer;



