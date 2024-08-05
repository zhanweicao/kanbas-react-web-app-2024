import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const updateAssignment = async (cid: string, assignment: any) => {
    const response = await axios.
        put(`${COURSES_API}/${cid}/assignments/${assignment._id}`, assignment);
    return response.data;
};

export const deleteAssignment = async (cid: string, assignmentId: string) => {
    const response = await axios
        .delete(`${COURSES_API}/${cid}/assignments/${assignmentId}`);
    return response.data;
};

export const createAssignment = async (cid: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${cid}/assignments`, assignment);
    return response.data;
};

export const getAssignment = async (cid: string) => {
    const response = await axios
        .get(`${COURSES_API}/${cid}/assignments`);
    return response.data;
};
