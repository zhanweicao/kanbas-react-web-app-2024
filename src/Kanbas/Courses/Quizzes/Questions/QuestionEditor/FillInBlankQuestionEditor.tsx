import React, { useState, useEffect } from "react";

interface FillInBlankQuestionEditorProps {
    fillInBlankAnswers: string[];
    onFillInBlankAnswersChange: (fillInBlankAnswers: string[]) => void;
}

export default function FillInBlankQuestionEditor({
    fillInBlankAnswers = [],
    onFillInBlankAnswersChange,
}: FillInBlankQuestionEditorProps) {
    const [localAnswers, setLocalAnswers] = useState<string[]>(fillInBlankAnswers);

    useEffect(() => {
        setLocalAnswers(fillInBlankAnswers);
    }, [fillInBlankAnswers]);

    const handleAddAnswer = () => {
        const updatedAnswers = [...localAnswers, ""];
        setLocalAnswers(updatedAnswers);
        onFillInBlankAnswersChange(updatedAnswers);
    };

    const handleRemoveAnswer = (index: number) => {
        const updatedAnswers = localAnswers.filter((_, i) => i !== index);
        setLocalAnswers(updatedAnswers);
        onFillInBlankAnswersChange(updatedAnswers);
    };

    const handleAnswerChange = (index: number, text: string) => {
        const updatedAnswers = localAnswers.map((answer, i) => (i === index ? text : answer));
        setLocalAnswers(updatedAnswers);
        onFillInBlankAnswersChange(updatedAnswers);
    };

    return (
        <div>
            <div className="mb-3">
                <label className="form-label"><strong>Correct Answers</strong></label>
                {localAnswers.map((answer, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                        <input
                            type="text"
                            className="form-control me-2"
                            value={answer}
                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveAnswer(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-secondary mt-2"
                    onClick={handleAddAnswer}
                >
                    Add Correct Answer
                </button>
            </div>
        </div>
    );
}
