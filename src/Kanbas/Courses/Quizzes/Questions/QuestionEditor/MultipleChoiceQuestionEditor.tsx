import React, { useState, useEffect } from "react";

interface MultipleChoiceQuestionEditorProps {
    choices: { text: string; correct: boolean }[];
    onChoicesChange: (choices: { text: string; correct: boolean }[]) => void;
}

export default function MultipleChoiceQuestionEditor({
    choices = [],
    onChoicesChange,
}: MultipleChoiceQuestionEditorProps) {
    const [localChoices, setLocalChoices] = useState(choices);

    useEffect(() => {
        setLocalChoices(choices);
    }, [choices]);

    const handleAddChoice = () => {
        const updatedChoices = [...localChoices, { text: "", correct: false }];
        setLocalChoices(updatedChoices);
        onChoicesChange(updatedChoices);
    };

    const handleRemoveChoice = (index: number) => {
        const updatedChoices = localChoices.filter((_, i) => i !== index);
        setLocalChoices(updatedChoices);
        onChoicesChange(updatedChoices);
    };

    const handleChoiceChange = (index: number, text: string) => {
        const updatedChoices = localChoices.map((choice, i) =>
            i === index ? { ...choice, text } : choice
        );
        setLocalChoices(updatedChoices);
        onChoicesChange(updatedChoices);
    };

    const handleCorrectChoiceChange = (index: number) => {
        const updatedChoices = localChoices.map((choice, i) => ({
            ...choice,
            correct: i === index,
        }));
        setLocalChoices(updatedChoices);
        onChoicesChange(updatedChoices);
    };

    return (
        <div>
            <div className="mb-3">
                <label className="form-label"><strong>Choices</strong></label>
                {localChoices.map((choice, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                        <input
                            type="radio"
                            name="correctChoice"
                            checked={choice.correct}
                            onChange={() => handleCorrectChoiceChange(index)}
                            className="me-2"
                        />
                        <textarea
                            className="form-control me-2"
                            value={choice.text}
                            onChange={(e) => handleChoiceChange(index, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveChoice(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-secondary mt-2"
                    onClick={handleAddChoice}
                >
                    Add Choice
                </button>
            </div>
        </div>
    );
}
