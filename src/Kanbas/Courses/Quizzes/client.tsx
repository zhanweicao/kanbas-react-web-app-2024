import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const createQuiz = async (cid: string, quiz: any) => {
    const response = await axios.post(`${COURSES_API}/${cid}/quizzes`, quiz);
    return response.data;
};

export const updateQuiz = async (cid: string, quizId: string, quiz: any) => {
    const response = await axios.put(`${COURSES_API}/${cid}/quizzes/${quizId}`, quiz);
    return response.data;
};

export const deleteQuiz = async (cid: string, quizId: string) => {
    const response = await axios.delete(`${COURSES_API}/${cid}/quizzes/${quizId}`);
    return response.data;
};

export const findQuizzesForCourse = async (cid: string) => {
    const response = await axios.get(`${COURSES_API}/${cid}/quizzes`);
    return response.data;
};

export const findQuizById = async (cid: string, quizId: string) => {
    const response = await axios.get(`${COURSES_API}/${cid}/quizzes/${quizId}`);
    return response.data;
};
