import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    questions: [],
};

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        addQuestion: (state, {payload: question}) => {
            const newQuestion: any = {
            };
            state.questions = [...state.questions, newQuestion] as any;
        },
        deleteQuestion: (state, {payload: questionId}) => {
            state.questions = state.questions.filter(
                (question: any) => question._id !== questionId
            );
        },
        updateQuestion: (state, {payload: updatedQuestion}) => {
            state.questions = state.questions.map((question: any) =>
                question._id === updatedQuestion._id ? updatedQuestion : question
            ) as any;
        },

        editQuestion: (state, {payload: questionId}) => {
            state.questions = state.questions.map((question: any) =>
                question._id === questionId ? {...question, editing: true} : question
            ) as any;
        }
    },
});
export const {setQuestions, addQuestion, updateQuestion, deleteQuestion} = questionsSlice.actions;