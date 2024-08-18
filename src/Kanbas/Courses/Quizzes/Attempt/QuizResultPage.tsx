import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function QuizResultPage() {
    const location = useLocation();
    const navigate = useNavigate();

    // The grade data should be passed via state when navigating to this page
    const { points, quizId } = location.state || { points: 0, quizId: null };

    const handleViewAnswers = () => {
        if (quizId) {
            navigate(`/Kanbas/Courses/${location.state.cid}/Quizzes/${quizId}/Answers`, { state: { quizId } });
        }
    };

    return (
        <div className="container mt-4">
            <h2>Quiz Results</h2>
            <div className="alert alert-success mt-4">
                <h4>Your Total Grade: {points} points</h4>
            </div>
            <button 
                className="btn btn-primary mt-3" 
                onClick={handleViewAnswers}
            >
                View My Answers
            </button>
        </div>
    );
}
