import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as client from "./client";
import QuestionControls from "./QuestionControls";
import QuestionEditButton from "./QuestionEditButton";
import { addQuestion } from "./reducer";
import { useDispatch } from "react-redux";

export default function QuestionsScreen() {
    const { cid, qid } = useParams<{ cid: string; qid: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState<any[]>([]);

    useEffect(() => {
        if (cid && qid) {
            client.findQuestionsForQuiz(cid, qid).then((questionsData) => {
                setQuestions(questionsData);
            });
        }
    }, [cid, qid]);

    const handleNavToQuizDetailEditorScreen = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`);
    };

    const handleNavToQuestionEditorScreen = (questionId: string) => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions/${questionId}/Edit`);
    };

    const handleNavToNewQuestion = async () => {
        if (cid && qid) {
            const newQuestion = {}; // Default values as needed
            const createdQuestion = await client.createQuestion(cid, qid, newQuestion);
            dispatch(addQuestion(createdQuestion));
            // Navigate to the QuestionDetail page after creating the new question
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions/${createdQuestion._id}`);
        }
    };
    

    const handleDeleteQuestion = async (questionId: string) => {
        if (cid && qid) {
            await client.deleteQuestion(cid, qid, questionId);
            setQuestions(questions.filter((question) => question._id !== questionId));
        }
    };

    const handleNavToQuestionDetail = (questionId: string) => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions/${questionId}`);
    }

    return (
        <div id="wd-questions">
            <div className="d-flex justify-content-start mb-4">
                <div className="d-flex">
                    <button
                        className="btn btn-light me-2"
                        onClick={handleNavToQuizDetailEditorScreen}
                    >
                        Detail
                    </button>
                    <button
                        className="btn btn-primary"
                        disabled
                    >
                        Questions
                    </button>
                </div>
                <QuestionControls  handleNavToNewQuestion={handleNavToNewQuestion} />
            </div>
            <hr />

            <div id="wd-question-list-title" className="wd-title d-flex justify-content-between p-3 ps-2 bg-secondary text-white">
                <span>Questions</span>
            </div>

            <ul id="wd-question-list" className="list-group">
                {questions.map((question: any, index: number) => (
                    <React.Fragment key={question._id}>
                        <li
                            className="wd-question-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
                            style={{
                                borderLeft: "4px solid green",
                                borderTop: index === 0 ? "none" : "4px solid transparent",
                            }}
                        >
                            <div className="d-flex flex-column">
                                <a
                                    className = "wd-question-link text-decoration-none fw-bold text-black"
                                    href = {`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions/${question._id}`}
                                    onClick={() => handleNavToQuestionDetail(question._id)}
                                >
                                {question.title}
                                </a>
                                <div>
                                    <b>{question.type}</b> | {question.points} pts | {question.questionText}
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <QuestionEditButton
                                    questionId={question._id}
                                    onDelete={() => handleDeleteQuestion(question._id)}
                                    onEdit={() => handleNavToQuestionEditorScreen(question._id)}
                                />
                            </div>
                        </li>
                        {index !== questions.length - 1 && <hr />}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}
