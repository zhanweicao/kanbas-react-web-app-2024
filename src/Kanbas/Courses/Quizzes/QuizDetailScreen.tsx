import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as client from "./client";

export default function QuizDetailScreen() {
    const { cid, qid } = useParams<{ cid: string; qid: string }>();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState<any>(null);

    useEffect(() => {
        if (cid && qid) {
            client.findQuizById(cid, qid).then((quizData) => {
                setQuiz(quizData);
            });
        }
    }, [cid, qid]);

    const handleBack = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };

    const handlePreview = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`);
    };

    const handleEdit = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`);
    };

    if (!quiz) {
        return <div>Loading...</div>;
    }

    return (
        <div id="wd-quiz-detail-screen" className="container mt-4">
            <button className="btn btn-secondary mb-4" onClick={handleBack}>Back to Quizzes</button>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{quiz.title}</h2>
                <div>
                    <button className="btn btn-secondary me-2" onClick={handlePreview}>Preview</button>
                    <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                </div>
            </div>
            <hr />
            <div className="row mb-3">
                <div className="col-md-4"><strong>Quiz Type</strong></div>
                <div className="col-md-8">{quiz.type}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Points</strong></div>
                <div className="col-md-8">{quiz.points}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Assignment Group</strong></div>
                <div className="col-md-8">{quiz.assignmentGroup}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Shuffle Answers</strong></div>
                <div className="col-md-8">{quiz.shuffleAnswers ? "Yes" : "No"}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Time Limit</strong></div>
                <div className="col-md-8">{quiz.timeLimit} Minutes</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Multiple Attempts</strong></div>
                <div className="col-md-8">{quiz.multipleAttempts ? "Yes" : "No"}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Show Correct Answers</strong></div>
                <div className="col-md-8">{quiz.showCorrectAnswers ? "Yes" : "No"}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Access Code</strong></div>
                <div className="col-md-8">{quiz.accessCode || "None"}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>One Question at a Time</strong></div>
                <div className="col-md-8">{quiz.oneQuestionAtATime ? "Yes" : "No"}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Webcam Required</strong></div>
                <div className="col-md-8">{quiz.webcamRequired ? "Yes" : "No"}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Lock Questions After Answering</strong></div>
                <div className="col-md-8">{quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Due Date</strong></div>
                <div className="col-md-8">{quiz.dueDate ? new Date(quiz.dueDate).toLocaleString() : "No due date set"}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Available Date</strong></div>
                <div className="col-md-8">{quiz.availableDate ? new Date(quiz.availableDate).toLocaleString() : "Not available"}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Until Date</strong></div>
                <div className="col-md-8">{quiz.untilDate ? new Date(quiz.untilDate).toLocaleString() : "No end date"}</div>
            </div>
        </div>
    );
}
