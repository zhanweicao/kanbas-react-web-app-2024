import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as questionClient from "../Questions/client";
import * as gradeClient from './client';

interface Answer {
    question: string;
    value: string | boolean;
}

interface Question {
    _id: string;
    type: string;
    title: string;
    points: number;
    questionText: string;
    choices?: { text: string; correct: boolean }[];
    trueFalseAnswer?: boolean;
    fillInBlankAnswers?: string[];
}

export default function ViewAnswersPage() {
    const { cid, qid, gid } = useParams<{ cid: string; qid: string; gid: string }>();
    const navigate = useNavigate();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [grade, setGrade] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function fetchData() {
            if (cid && qid && gid) {
                try {
                    const [questionsData, gradeData] = await Promise.all([
                        questionClient.findQuestionsForQuiz(cid, qid),
                        gradeClient.findGradeById(cid, qid, gid)
                    ]);
                    setQuestions(questionsData);
                    setGrade(gradeData);
                    setIsLoading(false);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setIsLoading(false);
                }
            }
        })();
    }, [cid, qid, gid]);

    const checkAnswerCorrectness = (question: Question, answer: Answer) => {
        if (question.type === "Multiple Choice") {
            const correctChoice = question.choices?.find(choice => choice.correct);
            return correctChoice?.text === answer.value;
        }
        if (question.type === "True/False") {
            return question.trueFalseAnswer === answer.value;
        }
        if (question.type === "Fill in the Blank") {
            return question.fillInBlankAnswers?.includes(answer.value as string);
        }
        return false;
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <div id="wd-view-answers">
            <h1>Quiz Answers</h1>
            <ul id="wd-answer-list" className="list-group">
                {questions.map((question: Question, index: number) => {
                    const userAnswer = grade?.attempt.answers.find((a: Answer) => a.question === question._id);
                    const isCorrect = userAnswer ? checkAnswerCorrectness(question, userAnswer) : false;

                    return (
                        <li
                            key={question._id}
                            className={`wd-answer-list-item list-group-item p-2 d-flex justify-content-between align-items-center ${isCorrect ? 'bg-success-subtle' : 'bg-danger-subtle'}`}
                            style={{
                                borderLeft: `6px solid ${isCorrect ? '#28a745' : 'red'}`,
                                borderTop: index === 0 ? "none" : "4px solid transparent",
                                backgroundColor: isCorrect ? '#b2f2bb' : '#f8d7da', // Darker green for correct, red for incorrect
                            }}
                        >
                            <div className="d-flex flex-column">
                                <h5 className="fw-bold" style={{ color: 'black' }}>
                                    {question.title}
                                </h5>
                                <div>
                                    <strong>Your Answer:</strong> {userAnswer?.value?.toString()}
                                    {!isCorrect && (
                                        <>
                                            {" | "}
                                            <strong>Correct:</strong> 
                                            {question.type === "Multiple Choice"
                                                ? question.choices?.find(choice => choice.correct)?.text
                                                : question.type === "True/False"
                                                ? question.trueFalseAnswer?.toString()
                                                : question.fillInBlankAnswers?.join(", ")}
                                        </>
                                    )}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
}
