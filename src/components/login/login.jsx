import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import "./login.css";
import check from "../../assets/check.png";

const Login = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberSubmitted, setIsPhoneNumberSubmitted] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(60); // Countdown timer set to 60 seconds
  const [isVerificationSuccessful, setIsVerificationSuccessful] =
    useState(false);

  useEffect(() => {
    let interval;
    if (isPhoneNumberSubmitted && countdown > 0) {
      setShowCountdown(true);
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setShowCountdown(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPhoneNumberSubmitted, countdown]);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Phone number submitted:", phoneNumber);
    setIsPhoneNumberSubmitted(true);
  };

  const handleOtpChange = (event, index) => {
    const newOtp = [...otp];
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleContinue = () => {
    console.log("Continue button clicked!");
    // Verify OTP logic can be added here
    setIsVerificationSuccessful(true);
  };

  const handleResend = () => {
    console.log("Resend button clicked!");
    setCountdown(60);
  };

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div className="log-cont">
      <div className="login-content">
        <img src={Logo} alt="Logo" className="login-logo" />
        <button className="close-button" onClick={handleClose}>
          <span className="btn-text-close">x</span>
        </button>
        {!isPhoneNumberSubmitted ? (
          <>
            <p>Enter your phone number to sign in</p>
            <div className="mob">
              <p>Mobile Number</p>
            </div>
            <div className="phone-input">
              <span className="number-prefix">+91</span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
            <p>
              Don't have an account?{" "}
              <a href="/signup" target="_blank" rel="noopener noreferrer">
                Sign up
              </a>
            </p>
          </>
        ) : (
          <>
            {!isVerificationSuccessful ? (
              <div className="otp-container">
                <div className="text-subheading">
                  <p>
                    Enter the <em>4-Digit</em> verification sent to +91{" "}
                    {phoneNumber}
                  </p>
                </div>
                <div className="otp-input">
                  <input
                    type="text"
                    maxLength={1}
                    value={otp[0]}
                    onChange={(event) => handleOtpChange(event, 0)}
                  />
                  <input
                    type="text"
                    maxLength={1}
                    value={otp[1]}
                    onChange={(event) => handleOtpChange(event, 1)}
                  />
                  <input
                    type="text"
                    maxLength={1}
                    value={otp[2]}
                    onChange={(event) => handleOtpChange(event, 2)}
                  />
                  <input
                    type="text"
                    maxLength={1}
                    value={otp[3]}
                    onChange={(event) => handleOtpChange(event, 3)}
                  />
                </div>
                <div className="countdown-timer">
                  {showCountdown ? (
                    <p>
                      Resend code in{" "}
                      <span className="countdown-number">{countdown}</span>{" "}
                      seconds
                    </p>
                  ) : (
                    <button onClick={handleResend}>Resend Code</button>
                  )}
                </div>
                <div className="continue-btn">
                  <button onClick={handleContinue}>Continue</button>
                </div>
              </div>
            ) : (
              <div className="verification-success">
                 <img src={check}></img>
                <p>
                  Congratulations, your account has been successfully created.
                </p>
                {/* Additional content for successful verification page */}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
