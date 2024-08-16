import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state,{ payload: quiz }) => {
            const newQuiz:  any = {
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter(
                (quiz: any) => quiz._id !== quizId
            );
        },
        updateQuiz: (state, { payload: updatedQuiz }) => {
            state.quizzes = state.quizzes.map((quiz:any) =>
                quiz._id === updatedQuiz._id ? updatedQuiz : quiz
            ) as any;
        },
        
        editQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((quiz:any) =>
                quiz._id === quizId ? { ...quiz, editing: true } : quiz
            ) as any;
        },
    },
});


export const { setQuizzes, addQuiz, updateQuiz, deleteQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
