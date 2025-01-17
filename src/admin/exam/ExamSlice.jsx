import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SERVER_URL } from "../../config";

const BASE_URL = SERVER_URL;

// console.log(BASE_URL);
const initialState = {
    examQuestions:[],
    startExam: null,
    examQuestions: null,
    loading: false,
    error: null,
    addResult:[],
    getResult:[],
    finalSubmit:[],
    quizResult:[],
    result:[],
    success: false,
    // quizAnswer:[]
    quizStatus:[]
};


  export const quizQuestionsReducer = createAsyncThunk(
    "quizQuestionsReducer",
    async (obj, { getState }) => {
      try {
        const token = await localStorage.getItem('token');
        const response = await axios.post(`${BASE_URL}/questions`, {
        quiz_id: obj.quiz_id,
        class: obj.class,
        subject: obj.subject,
        chapter: obj.chapter,
        difficulty_label: obj.difficulty_level,
        questions: obj.questions,
        }
        , {
          headers: {
            'remember-token': token,
          }
        });
        // console.log("slice data")
        // console.log("slice data",response.data)
        return response?.data;
      } catch (error) {
        return error?.message;
      }
    }
  );
  
  export const startExamReducer = createAsyncThunk(
    'startExamReducer',
    async (obj, { getState }) => {
      try {
        const token = await localStorage.getItem('token');
        const response = await axios.post(`${BASE_URL}/start-exam`, {
          class: obj.class,
          subject: obj.subject,
          chapter: obj.chapter,
          difficulty_level:obj.difficulty_level,
          no_of_question: obj.no_of_question,
          duration:obj.duration
        }, {
          headers: {
            'remember-token': token,
          }
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
      }
    }
  );
  
  export const addResultReducer = createAsyncThunk(
    'addResultReducer',
    async (obj, { getState }) => {
      try {
        const token = await localStorage.getItem('token');
        const response = await axios.post(`${BASE_URL}/add-result`, {
          id: obj.id,
          quiz_id: obj.quiz_id,
          question_id: obj.question_id,
          correct:obj.correct,
          is_review: obj.is_review,
          question_status:obj.question_status,
        }, {
          headers: {
            'remember-token': token,
          }
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
      }
    }
  );


  export const getResultReducer = createAsyncThunk(
    'getResultReducer',
    async (obj, { getState }) => {
      try {

        const token = await localStorage.getItem('token');
        const response = await axios.post(`${BASE_URL}/get-result`, {
          quiz_id:obj.quiz_id,
          question: obj.question
        }, {
          headers: {
            'remember-token': token,
          }
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
      }
    }
  );

  
  export const finalSubmitReducer = createAsyncThunk(
    'finalSubmitReducer',
    async (obj, { getState }) => {
      try {

        const token = await localStorage.getItem('token');
        const response = await axios.post(`${BASE_URL}/final-submit`, {
          quiz_id:obj.quiz_id,
          end_time:obj.end_time,
          status:1
        }, {
          headers: {
            'remember-token': token,
          }
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
      }
    }
  );


  export const quizResultReducer = createAsyncThunk(
    'quizResultReducer',
    async (obj, { getState }) => {
      try {

        const token = await localStorage.getItem('token');
        const response = await axios.post(`${BASE_URL}/all-question-result`, {
          quiz_id:obj.quiz_id,
          
        }, {
          headers: {
            'remember-token': token,
          }
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
      }
    }
  );

  export const resultReducer = createAsyncThunk(
    'resultReducer',
    async (obj, { getState }) => {
      try {

        const token = await localStorage.getItem('token');
        const response = await axios.post(`${BASE_URL}/result`, {
          quiz_id:obj.quiz_id,
          
        }, {
          headers: {
            'remember-token': token,
          }
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
      }
    }
  );

  // export const quizAnswerReducer = createAsyncThunk(
  //   'quizAnswerReducer',
  //   async (obj, { getState }) => {
  //     try {

  //       const token = await localStorage.getItem('token');
  //       const response = await axios.post(`${BASE_URL}/quiz-answer`, {
  //         quiz_id:obj.quiz_id,
  //         question: obj.question
  //       }, {
  //         headers: {
  //           'remember-token': token,
  //         }
  //       });
  //       return response.data;
  //     } catch (error) {
  //       throw new Error(error.response?.data?.message || error.message);
  //     }
  //   }
  // );


    export const quizAnswerStatusReducer = createAsyncThunk(
    'quizAnswerStatusReducer',
    async (obj, { getState }) => {
      try {

        const token = await localStorage.getItem('token');
        const response = await axios.post(`${BASE_URL}/quiz-status`, {
          quiz_id:obj.quiz_id,
          question: obj.question
        }, {
          headers: {
            'remember-token': token,
          }
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
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
        builder
        .addCase(startExamReducer.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(startExamReducer.fulfilled, (state, action) => {
          state.loading = false;
          state.startExam = action.payload.data; // Ensure this matches your API response structure
        })
        .addCase(startExamReducer.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
      builder
        .addCase(addResultReducer.fulfilled, (state, action) => {
        //   console.log("dddd", action?.payload?.data);
          state.addResult = action?.payload.data;
        });
      builder
        .addCase(getResultReducer.fulfilled, (state, action) => {
        //   console.log("dddd", action?.payload?.data);
          state.getResult = action?.payload.data;
        });
   
      builder
        .addCase(finalSubmitReducer.fulfilled, (state, action) => {
        //   console.log("dddd", action?.payload?.data);
          state.finalSubmit = action?.payload.data;
        });
      builder
        .addCase(quizResultReducer.fulfilled, (state, action) => {
          state.quizResult = action?.payload.data;
        });
      builder
      .addCase(resultReducer.fulfilled, (state, action) => {
        state.result = action?.payload.data;
      });
      // builder
      // .addCase(quizAnswerReducer.fulfilled, (state, action) => {
      //   state.quizAnswer = action?.payload.data;
      // });
      builder
      .addCase(quizAnswerStatusReducer.fulfilled, (state, action) => {
        state.quizStatus = action?.payload.data;
      });
      
   
    },
  });
  
  export const { reducerName } = ExamSlice.actions;
  
  export default ExamSlice.reducer;



