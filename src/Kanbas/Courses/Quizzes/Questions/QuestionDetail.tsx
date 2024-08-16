import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as client from "./client";

export default function QuestionDetail() {
    const { cid, qid, questionId } = useParams<{ cid: string; qid: string; questionId: string }>();
    const navigate = useNavigate();
    const [question, setQuestion] = useState<any>(null);

    useEffect(() => {
        if (cid && qid && questionId) {
            client.findQuestionById(cid, qid, questionId).then((questionData) => {
                setQuestion(questionData);
            });
        }
    }, [cid, qid, questionId]);

    const handleBack = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`);
    };

    const handleEdit = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions/${questionId}/Edit`);
    };

    if (!question) {
        return <div>Loading...</div>;
    }

    const getLetterForIndex = (index: number) => {
        return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
    };

    // Determine the correct answer based on the question type
    const correctAnswer =
        question.type === "Multiple Choice"
            ? question.choices.find((choice: any) => choice.correct)?.text
            : question.correctAnswer;

    return (
        <div id="wd-question-detail" className="container mt-4">
            <button className="btn btn-secondary mb-4" onClick={handleBack}>Back to Questions</button>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{question.title}</h2>
                <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
            </div>
            <hr />
            <div className="row mb-3">
                <div className="col-md-4"><strong>Question Type</strong></div>
                <div className="col-md-8">{question.type}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Points</strong></div>
                <div className="col-md-8">{question.points}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Question Text</strong></div>
                <div className="col-md-8">{question.questionText}</div>
            </div>
            {question.type === "Multiple Choice" && (
                <div className="row mb-3">
                    <div className="col-md-4"><strong>Choices</strong></div>
                    <div className="col-md-8">
                        {question.choices.map((choice: any, index: number) => (
                            <div key={index}>
                                <strong>{getLetterForIndex(index)}.</strong> {choice.text}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="row mb-3">
                <div className="col-md-4"><strong>Correct Answer</strong></div>
                <div className="col-md-8">{correctAnswer}</div>
            </div>
        </div>
    );
}
