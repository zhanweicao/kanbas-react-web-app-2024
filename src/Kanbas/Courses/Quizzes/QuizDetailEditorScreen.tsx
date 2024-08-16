import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import * as client from "./client";

export default function QuizDetailEditorScreen() {
    const { cid, qid } = useParams<{ cid: string; qid: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const [quiz, setQuiz] = useState<any>(null);

    useEffect(() => {
        if (cid && qid) {
            client.findQuizById(cid, qid).then((quizData) => {
                setQuiz(quizData);
            });
        }
    }, [cid, qid]);

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };

    const handleSave = async () => {
        if (cid && qid && quiz) {
            try {
                await client.updateQuiz(cid, qid, quiz);
                navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
            } catch (error) {
                console.error("Failed to update the quiz:", error);
            }
        }
    };

    if (!quiz) {
        return <div>Loading...</div>;
    }

    const isDetailTab = location.pathname.endsWith('/Edit');

    return (
        <div id="wd-quiz-detail-editor" className="container mt-4">
            <div className="d-flex justify-content-start mb-4">
                <Link
                    to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`}
                    className={`btn ${isDetailTab ? 'btn-primary' : 'btn-light'} me-2`}
                >
                    Detail
                </Link>
                <Link
                    to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`}
                    className={`btn ${!isDetailTab ? 'btn-primary' : 'btn-light'}`}
                >
                    Questions
                </Link>
            </div>
            <hr />
            <form>
                <div className="mb-3">
                    <label className="form-label"><strong>Quiz Title</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        value={quiz.title}
                        placeholder="Enter quiz title"
                        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Quiz Description</strong></label>
                    <textarea
                        className="form-control"
                        value={quiz.description}
                        placeholder="Enter quiz description"
                        onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Quiz Type</strong></label>
                    <select
                        className="form-select"
                        value={quiz.type}
                        onChange={(e) => setQuiz({ ...quiz, type: e.target.value })}
                    >
                        <option value="Graded Quiz">Graded Quiz</option>
                        <option value="Practice Quiz">Practice Quiz</option>
                        <option value="Graded Survey">Graded Survey</option>
                        <option value="Ungraded Survey">Ungraded Survey</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Assignment Group</strong></label>
                    <select
                        className="form-select"
                        value={quiz.assignmentGroup}
                        onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}
                    >
                        <option value="Quiz">Quiz</option>
                        <option value="Exam">Exam</option>
                        <option value="Assignment">Assignment</option>
                        <option value="Project">Project</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Total Points</strong></label>
                    <p className="form-control-plaintext">{quiz.points}</p>
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Shuffle Answers</strong></label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={quiz.shuffleAnswers}
                        onChange={(e) => setQuiz({ ...quiz, shuffleAnswers: e.target.checked })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Time Limit (minutes)</strong></label>
                    <input
                        type="number"
                        className="form-control"
                        value={quiz.timeLimit}
                        onChange={(e) => setQuiz({ ...quiz, timeLimit: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Multiple Attempts</strong></label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={quiz.multipleAttempts}
                        onChange={(e) => setQuiz({ ...quiz, multipleAttempts: e.target.checked })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Max Attempts</strong></label>
                    <input
                        type="number"
                        className="form-control"
                        value={quiz.maxAttempts}
                        onChange={(e) => setQuiz({ ...quiz, maxAttempts: e.target.value })}
                        disabled={!quiz.multipleAttempts}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Show Correct Answers</strong></label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={quiz.showCorrectAnswers}
                        onChange={(e) => setQuiz({ ...quiz, showCorrectAnswers: e.target.checked })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Access Code</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        value={quiz.accessCode}
                        onChange={(e) => setQuiz({ ...quiz, accessCode: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>One Question at a Time</strong></label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={quiz.oneQuestionAtATime}
                        onChange={(e) => setQuiz({ ...quiz, oneQuestionAtATime: e.target.checked })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Webcam Required</strong></label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={quiz.webcamRequired}
                        onChange={(e) => setQuiz({ ...quiz, webcamRequired: e.target.checked })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Lock Questions After Answering</strong></label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={quiz.lockQuestionsAfterAnswering}
                        onChange={(e) => setQuiz({ ...quiz, lockQuestionsAfterAnswering: e.target.checked })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Due Date</strong></label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={quiz.dueDate ? new Date(quiz.dueDate).toISOString().slice(0, 16) : ""}
                        onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Available Date</strong></label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={quiz.availableDate ? new Date(quiz.availableDate).toISOString().slice(0, 16) : ""}
                        onChange={(e) => setQuiz({ ...quiz, availableDate: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Until Date</strong></label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={quiz.untilDate ? new Date(quiz.untilDate).toISOString().slice(0, 16) : ""}
                        onChange={(e) => setQuiz({ ...quiz, untilDate: e.target.value })}
                    />
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <button type="button" className="btn btn-secondary me-3" onClick={handleCancel}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                </div>
            </form>
        </div>
    );
}
