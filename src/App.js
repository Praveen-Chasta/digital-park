import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home/index";
import QuizPage from "./pages/quiz-page/index";
import Nextpage from "./pages/nextpage/nextpage";
import '@fortawesome/fontawesome-free/css/all.css';
import Login from "./components/login/login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClose = () => {
    setShowLogin(false); // Close the login popup
  };

  return (
    <div className="App">
      <Router>
        <Navbar onLoginClick={() => setShowLogin(true)} />{" "}
        {/* Pass onLoginClick function */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/quiz-page" element={<QuizPage />} />
          <Route path="/pages/nextpage" element={<Nextpage />} />
        </Routes>
      </Router>
      {showLogin && <Login onClose={handleLoginClose} />}{" "}
      {/* Show login component based on state */}
    </div>
  );
}

export default App;
