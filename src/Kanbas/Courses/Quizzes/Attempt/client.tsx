import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// Create a grade for a quiz attempt
export const createGrade = async (cid: string, qid: string, gradeData: any) => {
    console.log("Sending gradeData:", gradeData); // Log the data being sent
    const response = await axiosWithCredentials.post(`${COURSES_API}/${cid}/quizzes/${qid}/grades`, gradeData);
    return response.data;
};

// Update a specific grade by grade ID
export const updateGrade = async (cid: string, quizId: string, quiz: any) => {
    const response = await axiosWithCredentials.put(`${COURSES_API}/${cid}/quizzes/${quizId}`, quiz);
    return response.data;
};

// Delete a specific grade by grade ID
export const deleteGrade = async (cid: string, quizId: string) => {
    const response = await axiosWithCredentials.delete(`${COURSES_API}/${cid}/quizzes/${quizId}`);
    return response.data;
};

// Find all grades for a specific course
export const findGradeForQuiz = async (cid: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${cid}/quizzes`);
    return response.data;
};

// Find a specific grade by grade ID
export const findGradeById = async (cid: string, qid: string, gid: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${cid}/quizzes/${qid}/grades/${gid}`);
    return response.data;
};

// Find the latest grade for a specific quiz and user
export const findLatestGradeForQuiz = async (cid: string, qid: string, userId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${cid}/quizzes/${qid}/grades/latest/${userId}`);
    return response.data;
};

