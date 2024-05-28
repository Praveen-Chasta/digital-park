import {configureStore} from "@reduxjs/toolkit";
import RegisterSlice from "../components/Auth/SignUp/RegisterSlice";
import LoginSlice from "../components/Auth/Login/LoginSlice";
import SubjectClassSlice from "../components/class/SubjectClassSlice";
import ExamSlice from "../admin/exam/ExamSlice";

export const store = configureStore({
    reducer: {
        register: RegisterSlice,
        login: LoginSlice,
        subjectClass: SubjectClassSlice,
        quizQuestions: ExamSlice,
    },
  });
  