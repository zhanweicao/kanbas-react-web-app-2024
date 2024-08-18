import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// /api/courses/:cid/quiz/:qid/grades
export const createGrade = async (cid: string, qid: any, grade: any) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${cid}/quizzes/${qid}/grades`, grade);
    return response.data;
};

export const updateGrade = async (cid: string, quizId: string, quiz: any) => {
    const response = await axiosWithCredentials.put(`${COURSES_API}/${cid}/quizzes/${quizId}`, quiz);
    return response.data;
};

export const deleteGrade = async (cid: string, quizId: string) => {
    const response = await axiosWithCredentials.delete(`${COURSES_API}/${cid}/quizzes/${quizId}`);
    return response.data;
};

export const findGradeForQuiz = async (cid: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${cid}/quizzes`);
    return response.data;
};

export const findGradeById = async (cid: string, quizId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${cid}/quizzes/${quizId}`);
    return response.data;
};