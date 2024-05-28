// src/components/Navigation.js
import React from 'react';
import './ExamPage.css';

const Navigation = ({ handleNavigation, handleReview, handleSubmit, currentQuestion, totalQuestions }) => {
    return (
        <div>
            <button onClick={() => handleNavigation('prev')} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={() => handleNavigation('next')} disabled={currentQuestion === totalQuestions - 1}>Next</button>
            <button className="review" onClick={handleReview}>Mark for Review</button>
            {currentQuestion === totalQuestions - 1 && (
                <button onClick={handleSubmit}>Submit Test</button>
            )}
        </div>
    );
};

export default Navigation;
