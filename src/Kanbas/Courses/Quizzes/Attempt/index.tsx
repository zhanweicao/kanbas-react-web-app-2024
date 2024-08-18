import React, { useEffect, useState } from "react";
import * as questionClient from "../Questions/client";
import * as gradeClient from './client'
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Attempt() {
    const navigate = useNavigate();
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const currentUser = useSelector(
        (state: any) => state.accountReducer.currentUser,
    );
    const [questions, setQuestions] = useState<Array<any>>([]);
    const [answer, setAnswer] = useState<
        Array<{ type: string | null; value: string | boolean | null }>
    >([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        (async function () {
            const { cid, qid } = params;
            if (!cid || !qid) return;
            const questions = await questionClient.findQuestionsForQuiz(cid, qid);
            questions.sort((a: any, b: any) => a.order - b.order);
            setQuestions(questions);
            const initAnswers = questions.map((q: any) => ({ type: q.type, value: null }))
            setAnswer(initAnswers);
            setIsLoading(false);
        })();
    }, []);

    const handleAnswer = (event: any, index: number) => {
        const question = questions[index];
        if (question.type === "Multiple Choice") {
            const thisAnswer = event.target.value;
            const newAnswer = [...answer];
            newAnswer[index].value = thisAnswer;
            setAnswer(newAnswer);
            return;
        }
        if (question.type === "True/False") {
            const thisAnswer = event.target.value === 'true' ? true : false;
            const newAnswer = [...answer];
            newAnswer[index].value = thisAnswer;
            setAnswer(newAnswer);
            return;
        }
        if (question.type === "Fill in the Blank") {
            const thisAnswer = event.target.value;
            const newAnswer = [...answer];
            newAnswer[index].value = thisAnswer;
            setAnswer(newAnswer);
            return;
        }
    };

    const renderAnswerEditor = (index: any) => {
        const question = questions[index];
        if (question.type === "Multiple Choice") {
            const { choices } = question;
            return (
                <>
                    {choices.map((c: any) => {
                        return (
                            <p key={c.text}>
                                <label>
                                    <input
                                        onChange={(e) => handleAnswer(e, index)}
                                        type="radio"
                                        value={c.text}
                                        checked={answer[index].value === c.text}
                                    />
                                    {c.text}
                                </label>
                            </p >
                        );
                    })}
                </>
            );
        }
        if (question.type === "True/False") {
            console.log(answer[index].value, question)
            return (
                <>
                    <p>
                        <label>
                            <input
                                type="radio"
                                value={'true'}
                                onChange={(e) => handleAnswer(e, index)}
                                checked={answer[index].value === true}
                            />
                            {"True"}
                        </label>
                    </p >
                    <p>
                        <label>
                            <input
                                type="radio"
                                value={'false'}
                                onChange={(e) => handleAnswer(e, index)}
                                checked={answer[index].value === false}
                            />
                            {"False"}
                        </label>
                    </p >
                </>
            );
        }
        if (question.type === "Fill in the Blank") {
            return (
                <p>
                    Answer:{" "}
                    <input
                        value={answer[index].value as string}
                        onChange={(e) => handleAnswer(e, index)}
                    />
                </p >
            );
        }
        throw "wrong type";
    };

    const onSubmit = async () => {
        if (!params.cid || !params.qid) return;
        
        const answerData = answer.map((a, index) => ({ 
            ...a, 
            question: questions[index]._id 
        }));
        
        console.log("Submitting answerData:", answerData); // Log the answers before sending
        
        const res = await gradeClient.createGrade(params.cid, params.qid, { answers: answerData });
        console.log(res);
    }
      
      

    if (isLoading) return <p>Loading</p >;
    const question = questions[currentIndex];
    return (
        <div>
            <div>
                {" "}
                <div>
                    <h1>{`Q${currentIndex + 1} - ${question.title}`}</h1>
                    {currentUser?.role === "FACULTY" && (
                        <p className="bg-danger-subtle px-2 py-1 text-danger" >This is a preview of the published version of the quiz.</p >
                    )}
                    <h2>Quiz Instruction</h2>
                    <hr />
                    <div className="border border-2">
                        <div className="bg-secondary-subtle px-3 py-1 d-flex justify-content-between">
                            <span className="fw-bold">Question {currentIndex + 1}</span>
                            <span>{question.points} point</span>
                        </div>
                        <div className="p-3">
                            <p>{question.questionText}</p >
                            <hr />
                            {renderAnswerEditor(currentIndex)}
                        </div>
                    </div>
                    <div className="w-100 d-flex justify-content-between my-3">
                        <button
                            className="bg-body-secondary border border-light-subtle px-3 py-1 rounded"
                            disabled={currentIndex === 0}
                            onClick={() => setCurrentIndex(currentIndex - 1)}
                        >
                            Previous
                        </button>
                        <button
                            className="bg-body-secondary border border-light-subtle px-3 py-1 rounded"
                            disabled={currentIndex === questions.length - 1}
                            onClick={() => setCurrentIndex(currentIndex + 1)}
                        >
                            Next
                        </button>
                    </div>
                    <div className="border border-2 p-1 d-flex justify-content-end">
                        <button className="bg-body-secondary border border-light-subtle px-3 py-1 rounded" onClick={onSubmit}>Submit Quiz</button>
                    </div>
                </div>
                {currentUser?.role === "FACULTY" && <p className="bg-body-secondary px-2 py-1 mt-5 border border-1">Keep Editing This Quiz</p >}
            </div>
        </div>
    );
}