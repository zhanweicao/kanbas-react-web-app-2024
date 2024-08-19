import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const createQuestion = async (cid: string, quizId: string, question: any) => {
    const response = await axios.post(`${COURSES_API}/${cid}/quizzes/${quizId}/questions`, question);
    return response.data;
}

export const updateQuestion = async (cid: string, quizId: string, questionId: string, question: any) => {    
    const response = await axios.put(`${COURSES_API}/${cid}/quizzes/${quizId}/questions/${questionId}`, question);
    return response.data;
}

export const deleteQuestion = async (cid: string, quizId: string, questionId: string) => {  
    const response = await axios.delete(`${COURSES_API}/${cid}/quizzes/${quizId}/questions/${questionId}`);
    return response.data;
}

export const findQuestionsForQuiz = async (cid: string, quizId: string) => {
    const response = await axios.get(`${COURSES_API}/${cid}/quizzes/${quizId}/questions`);
    return response.data;
}

export const findQuestionById = async (cid: string, quizId: string, questionId: string) => {
    const response = await axios.get(`${COURSES_API}/${cid}/quizzes/${quizId}/questions/${questionId}`);
    return response.data;
}