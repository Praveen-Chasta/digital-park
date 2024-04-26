import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home/index";
import QuizPage from "./pages/quiz-page/index";
import Nextpage from "./pages/nextpage/nextpage";
import '@fortawesome/fontawesome-free/css/all.css';
import Login from "./components/login/login";
import AboutUs from "./pages/aboutus/aboutUs";

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
          <Route exact path="/" element={<Home />} />
          <Route path="/quiz-page" element={<QuizPage />} />
          <Route path="/nextpage" element={<Nextpage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
      {showLogin && <Login onClose={handleLoginClose} />}{" "}
      {/* Show login component based on state */}
    </div>
  );
}

export default App;
