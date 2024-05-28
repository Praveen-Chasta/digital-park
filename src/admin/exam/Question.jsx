// // src/components/Question.js
// import React, { useState, useEffect } from 'react';
// import './ExamPage.css';

// const Question = ({ data, handleAnswer, markedForReview, selectedAnswer }) => {
//     const [selectedOption, setSelectedOption] = useState(null);

//     useEffect(() => {
//         setSelectedOption(selectedAnswer);
//     }, [selectedAnswer]);

//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         handleAnswer(data.id, option);
//     };

//     return (
//         <div>
//             <h2>{data.question}</h2>
//             <ul>
//                 {data.options.map((option, index) => (
//                     <li 
//                         key={index} 
//                         className={selectedOption === option ? 'selected' : ''}
//                         onClick={() => handleOptionClick(option)}
//                     >
//                         {option}
//                     </li>
//                 ))}
//             </ul>
//             {markedForReview && <p>This question is marked for review.</p>}
//         </div>
//     );
// };

// export default Question;
