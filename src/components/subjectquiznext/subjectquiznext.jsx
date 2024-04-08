import React, { useEffect, useState } from "react";
import "./subjectquiznext.css";

// Accordion component
const Accordion = ({ title, options, index, isOpen, toggleAccordion }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    console.log("radio button clicked");
    setSelectedOption(event.target.value);
  };

  // Function to generate color based on index
  const getColor = (index) => {
    const colors = ["#ff5733", "#ffa933", "#33ff57", "#339cff", "#cc33ff"];
    return colors[index % colors.length];
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button
        className={`accordion-button accordion-button-${index}`}
        style={{
          backgroundColor: getColor(index), 
          borderRadius: isOpen ? "5px 5px 0 0" : "5px", // Adjust border-radius when open
        }}
        onClick={toggleAccordion}
      >
        <div className="accordion-title-container">
        {title}</div>
        {/* Use Font Awesome right angle icon */}<div className="accordion-btn-icon">
        <i className={`fas fa-angle-${isOpen ? "down" : "right"}`}></i></div>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <div className="radio-options">
            {options.map((option, idx) => (
              <div className="radio-option" key={idx}>
                <input
                  type="radio"
                  id={`option-${idx}-${title}`}
                  name={`option-${title}`}
                  value={option.value}
                  // checked={selectedOption === option.value}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option-${idx}-${title}`}>{option.label}</label>
              </div>
            ))}
          </div>
          <button
            className="start-exam-button"
            onClick={() =>
              console.log(`Selected option for ${title}: ${selectedOption}`)
            }
          >
            Start Exam
          </button>
        </div>
      )}
    </div>
  );
};

// Main component
const Subjectquiznext = () => {
  const [accordionData, setAccordionData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  // Simulate fetching data from an API
  useEffect(() => {
    // Fetch data from an API endpoint
    const fetchData = async () => {
      // Mock data
      const dataFromApi = Array.from({ length: 5 }, (_, i) => ({
        title: `Accordion ${i + 1}`,
        options: Array.from({ length: 5 }, (_, j) => ({
          label: `${10 * (j + 1)} questions`,
          value: 10 * (j + 1),
        })),
      }));

      setAccordionData(dataFromApi);
    };

    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="subject-quiz">
      <div className="wrapper-quiz-box">
        <div className="quiz-section">
          <div className="heading-row">
            <h5>Subject Wise Quiz</h5>
          </div>
          <div className="radio-row">
            <p>Select Difficulty Level:</p>
            <div className="checkboxes">
              {[
                "Basic (L1)",
                "Medium (L2)",
                "High (L3)",
                "Miscellaneous (L4)",
              ].map((level, index) => (
                <div className="checkbox" key={index}>
                  <input
                    type="radio"
                    id={`level-${index}`}
                    name="difficulty"
                    value={level}
                  />
                  <label htmlFor={`level-${index}`}>{level}</label>
                </div>
              ))}
            </div>
            <div className="accordion">
              {accordionData.map((accordion, index) => (
                <Accordion
                  key={index}
                  title={accordion.title}
                  options={accordion.options}
                  index={index + 1} // Add 1 to make the index 1-based
                  isOpen={openIndex === index + 1}
                  toggleAccordion={() => toggleAccordion(index + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-quiz-box2">
        <div className="quiz-section chapter-wise">
          <div className="heading-row2">
            <h5>Chapter Wise Quiz</h5>
          </div>
          <div className="radio-row2">
            <p>Select Difficulty Level:</p>
            <div className="checkboxes2">
              {[
                "Basic (L1)",
                "Medium (L2)",
                "High (L3)",
                "Miscellaneous (L4)",
              ].map((level, index) => (
                <div className="checkbox" key={index}>
                  <input
                    type="radio"
                    id={`level-chapter-${index}`}
                    name="difficulty-chapter"
                    value={level}
                  />
                  <label htmlFor={`level-chapter-${index}`}>{level}</label>
                </div>
              ))}
            </div>
            <div className="accordion">
              {accordionData.map((accordion, index) => (
                <Accordion
                  key={index}
                  title={accordion.title}
                  options={accordion.options}
                  index={index + 6} // Add 6 to make the index unique
                  isOpen={openIndex === index + 6}
                  toggleAccordion={() => toggleAccordion(index + 6)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjectquiznext;
