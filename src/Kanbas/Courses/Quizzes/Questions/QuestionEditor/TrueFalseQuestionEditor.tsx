import React from "react";

interface TrueFalseQuestionEditorProps {
    trueFalseAnswer: boolean;
    onTrueFalseAnswerChange: (answer: boolean) => void;
}

export default function TrueFalseQuestionEditor({
    trueFalseAnswer,
    onTrueFalseAnswerChange,
}: TrueFalseQuestionEditorProps) {
    return (
        <div>
            <div className="mb-3">
                <label className="form-label"><strong>Correct Answer</strong></label>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="true"
                        name="trueFalse"
                        checked={trueFalseAnswer === true}
                        onChange={() => onTrueFalseAnswerChange(true)}
                    />
                    <label className="form-check-label" htmlFor="true">True</label>
                </div>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="false"
                        name="trueFalse"
                        checked={trueFalseAnswer === false}
                        onChange={() => onTrueFalseAnswerChange(false)}
                    />
                    <label className="form-check-label" htmlFor="false">False</label>
                </div>
            </div>
        </div>
    );
}
