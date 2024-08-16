import React, { useState, useEffect } from "react";
import MultipleChoiceQuestionEditor from "./MultipleChoiceQuestionEditor";
import TrueFalseQuestionEditor from "./TrueFalseQuestionEditor";
import FillInBlankQuestionEditor from "./FillInBlankQuestionEditor";
import { useNavigate, useParams } from "react-router";
import { createQuestion, updateQuestion, findQuestionById } from "../client";
import { useDispatch } from "react-redux";
import { addQuestion, updateQuestion as updateQuestionInStore } from "../reducer";

export default function QuestionEditorPage() {
    const { cid, qid, questionId } = useParams<{ cid: string; qid: string; questionId?: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [questionType, setQuestionType] = useState<string>("Multiple Choice");
    const [questionData, setQuestionData] = useState({
        title: "",
        points: 0,
        questionText: "",
        type: "Multiple Choice",  // Initial type set to "Multiple Choice"
        choices: [] as { text: string; correct: boolean }[],
        trueFalseAnswer: false,
        fillInBlankAnswers: [] as string[],
    });

    useEffect(() => {
        if (questionId) {
            const fetchQuestion = async () => {
                try {
                    const data = await findQuestionById(cid!, qid!, questionId);
                    setQuestionData(data);
                    setQuestionType(data.type);  // Sync questionType with fetched data
                } catch (error) {
                    console.error("Failed to fetch question data:", error);
                }
            };
            fetchQuestion();
        }
    }, [cid, qid, questionId]);

    const handleSave = async () => {
        try {
            const updatedQuestionData = {
                ...questionData,
                type: questionType,
                trueFalseAnswer: questionType === "True/False" ? questionData.trueFalseAnswer : undefined,
                fillInBlankAnswers: questionType === "Fill in the Blank" ? questionData.fillInBlankAnswers : [],
                choices: questionType === "Multiple Choice" ? questionData.choices : [],
            };

            let savedQuestion;
            if (questionId) {
                savedQuestion = await updateQuestion(cid!, qid!, questionId, updatedQuestionData);
                dispatch(updateQuestionInStore(savedQuestion));
            } else {
                savedQuestion = await createQuestion(cid!, qid!, updatedQuestionData);
                dispatch(addQuestion(savedQuestion));
            }
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`);
        } catch (error) {
            console.error("Failed to save the question:", error);
        }
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`);
    };

    const handleQuestionTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newType = e.target.value;
        setQuestionType(newType);
        setQuestionData({ ...questionData, type: newType });  // Update questionData's type as well
    };

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <label className="form-label"><strong>Question Type</strong></label>
                <select
                    className="form-select"
                    value={questionType}
                    onChange={handleQuestionTypeChange}
                >
                    <option value="Multiple Choice">Multiple Choice</option>
                    <option value="True/False">True/False</option>
                    <option value="Fill in the Blank">Fill in the Blank</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label"><strong>Title</strong></label>
                <input
                    type="text"
                    className="form-control"
                    value={questionData.title}
                    onChange={(e) => setQuestionData({ ...questionData, title: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label className="form-label"><strong>Points</strong></label>
                <input
                    type="number"
                    className="form-control"
                    value={questionData.points}
                    onChange={(e) => setQuestionData({ ...questionData, points: parseInt(e.target.value) })}
                />
            </div>

            <div className="mb-3">
                <label className="form-label"><strong>Question Text</strong></label>
                <textarea
                    className="form-control"
                    value={questionData.questionText}
                    onChange={(e) => setQuestionData({ ...questionData, questionText: e.target.value })}
                />
            </div>

            {/* Conditional Rendering of the Specific Editor */}
            {questionType === "Multiple Choice" && (
                <MultipleChoiceQuestionEditor
                    choices={questionData.choices}
                    onChoicesChange={(choices) => setQuestionData({ ...questionData, choices })}
                />
            )}
            {questionType === "True/False" && (
                <TrueFalseQuestionEditor
                    trueFalseAnswer={questionData.trueFalseAnswer}
                    onTrueFalseAnswerChange={(trueFalseAnswer) =>
                        setQuestionData({
                            ...questionData,
                            trueFalseAnswer,
                        })
                    }
                />
            )}
            {questionType === "Fill in the Blank" && (
                <FillInBlankQuestionEditor
                    fillInBlankAnswers={questionData.fillInBlankAnswers}
                    onFillInBlankAnswersChange={(fillInBlankAnswers) => setQuestionData({ ...questionData, fillInBlankAnswers })}
                />
            )}

            <div className="d-flex justify-content-end mt-4">
                <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSave}
                >
                    Save/Update Question
                </button>
            </div>
        </div>
    );
}
