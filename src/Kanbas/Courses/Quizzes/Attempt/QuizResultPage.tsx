import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as gradeClient from './client';

// Define a type for the grade data
interface GradeAttempt {
    score: number;
    attemptDate: string;
    attemptCount: number;
    answers: Array<{ question: string; value: string | boolean }>;
}

interface Grade {
    _id: string;
    quiz: string;
    user: string;
    attempt: GradeAttempt;
    __v: number;
}

export default function QuizResultPage() {
    const { cid, gid } = useParams<{ cid: string; gid: string }>();
    const [grade, setGrade] = useState<Grade | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function fetchGrade() {
            if (cid && gid) {
                try {
                    const fetchedGrade = await gradeClient.findGradeById(cid, gid);
                    setGrade(fetchedGrade);
                    setIsLoading(false);
                } catch (error) {
                    console.error("Error fetching grade:", error);
                    setIsLoading(false);
                }
            }
        })();
    }, [cid, gid]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Quiz Result</h1>
            {grade ? (
                <div>
                    <p>Total Score: {grade.attempt.score}</p>
                    <button onClick={() => {/* Logic to view answers */}}>
                        View My Answers
                    </button>
                </div>
            ) : (
                <p>Grade not found</p>
            )}
        </div>
    );
}
