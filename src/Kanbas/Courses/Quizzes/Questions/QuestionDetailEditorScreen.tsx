import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import * as client from "./client";

export default function QuestionDetailEditorScreen() {
    const { cid, qid, questionId } = useParams<{ cid: string; qid: string; questionId: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const [question, setQuestion] = useState<any>(null);

    useEffect(() => {
        if (cid && qid && questionId) {
            client.findQuestionById(cid, qid, questionId).then((questionData) => {
                setQuestion(questionData);
            });
        }
    }, [cid, qid, questionId]);

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`);
    };

    const handleSave = async () => {
        if (cid && qid && questionId && question) {
            try {
                await client.updateQuestion(cid, qid, questionId, question);
                navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`);
            } catch (error) {
                console.error("Failed to save question:", error);
            }
        }
    };

    if (!question) {
        return <div>Loading...</div>;
    }

    return (
        <div id="wd-question-detail-editor" className="container mt-4">
            <form>
                <div className="mb-3">
                    <label className="form-label"><strong>Question Title</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        value={question.title}
                        placeholder="Enter question title"
                        onChange={(e) => setQuestion({ ...question, title: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Question Type</strong></label>
                    <select
                        className="form-select"
                        value={question.type}
                        onChange={(e) => setQuestion({ ...question, type: e.target.value })}
                    >
                        <option value="true_false">True/False</option>
                        <option value="multiple_choice">Multiple Choice</option>
                        <option value="fill_in_multiple_blanks">Fill in Multiple Blanks</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Points</strong></label>
                    <input
                        type="number"
                        className="form-control"
                        value={question.points}
                        onChange={(e) => setQuestion({ ...question, points: parseInt(e.target.value) })}
                    />
                </div>

                {/* Conditional rendering based on question type */}
                {question.type === "multiple_choice" && (
                    <div className="mb-3">
                        <label className="form-label"><strong>Options</strong></label>
                        <textarea
                            className="form-control"
                            value={question.options?.join("\n")}
                            placeholder="Enter options, one per line"
                            onChange={(e) =>
                                setQuestion({
                                    ...question,
                                    options: e.target.value.split("\n"),
                                })
                            }
                        />
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label"><strong>Correct Answer</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        value={question.correctAnswer}
                        placeholder="Enter the correct answer"
                        onChange={(e) => setQuestion({ ...question, correctAnswer: e.target.value })}
                    />
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <button type="button" className="btn btn-secondary me-3" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
