import React, { useState } from "react";
import "./quiz.css";
import cap1 from "../../assets/cap1.png";
import panel2 from "../../assets/panel2.png";
import browser3 from "../../assets/browser3.png";
import contact4 from "../../assets/contact4.png";

const Quiz = () => {
  // Define your list of quizzes
  const quizzes = [
    { id: 1, name: "Quiz 1" },
    { id: 2, name: "Quiz 2" },
    { id: 3, name: "Quiz 3" },
  ];

  // State variables
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle quiz selection
  const handleQuizSelect = (event) => {
    const selectedQuizId = parseInt(event.target.value);
    const quiz = quizzes.find((quiz) => quiz.id === selectedQuizId);
    setSelectedQuiz(quiz);
  };

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle search button click
  const handleSearchButtonClick = () => {
    // Perform search operation based on the search term
    console.log("Search Button Clicked");
  };

  // Filtered quizzes based on search term
  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hero1">
      <div className="main1">
        <div className="mhead">
          <h2>Online Tests & Quizzes</h2>
        </div>
        <div className="row-quiz-search">
          <div className="dropdown-container">
            <select
              value={selectedQuiz ? selectedQuiz.id : ""}
              onChange={handleQuizSelect}
            >
              <option value="">Select Quizzes</option>
              {filteredQuizzes.map((quiz) => (
                <option key={quiz.id} value={quiz.id}>
                  {quiz.name}
                </option>
              ))}
            </select>
          </div>
         
          <div className="search-bar-quiz">
            <input
              className="search-bar-quiz-input"
              type="text"
              placeholder="Search for Quizzes or Exams"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
         
          <div className="search-bar-btn-div">
            <button
              className="search-bar-btn"
              onClick={handleSearchButtonClick}
            >
              SEARCH
            </button>
          </div>
        </div>
        {/* Icons with descriptions */}
        <div className="icon-row1">
          <div className="icon34">
            <img src={cap1} alt="Icon 1" />
            <span>
              Trusted by over 1,200 students
              <br />
              and teachers
            </span>
          </div>
          <div className="icon34">
            <img src={panel2} alt="Icon 2" />
            <span>Over 2,500 online courses<br/>available everyday</span>
          </div>
          <div className="icon34">
            <img src={browser3} alt="icon3 " />
            <span>Our students come from every<br/>country in the world</span>
          </div>
          <div className="icon34">
            <img src={contact4} alt="Icon 4" />
            <span>Our team is devoted to<br/>transforming education</span>
          </div>
        </div>
        {/* Display selected quiz */}
        {selectedQuiz && (
          <div>
            <h3>Selected Quiz: {selectedQuiz.name}</h3>
            {/* You can display additional details of the selected quiz here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;