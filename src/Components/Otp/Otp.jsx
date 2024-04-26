import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Otp.css';

const OTPComponent = () => {
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [mobileError, setMobileError] = useState('');  

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const validateMobileNumber = (phoneNumber) => {
    const regex = /^[6-9]\d{9}$/; 
    if (!regex.test(phoneNumber)) {
      setMobileError('Invalid mobile number. Please enter 10 digits starting with 6, 7, 8, or 9.');
      return false;
    }
    return true;
  };

  const sendOTP = () => {
    if (!validateMobileNumber(phoneNumber)) {
      return;  
    }

    const generatedOTP = generateOTP();
    alert(`OTP has been sent to ${phoneNumber}: ${generatedOTP}`); 
    setOtpSent(true);
    setGeneratedOTP(generatedOTP);
  };

  const verifyOTP = () => {
    if (otp === generatedOTP) {
      setVerified(true);
      alert('OTP verified successfully!');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const resetOTP = () => {
    
    setPhoneNumber('');
    setOtpSent(false);
    setOtp('');
    setVerified(false);
    setGeneratedOTP('');
    setMobileError('');  
  };

  return (
    <div className="otp-container">
      <h2 className="my-heading">Verify Your OTP here!</h2>
      <div className="otp-form">
        <input
          type="text"
          className="otp-input"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            setMobileError('');  
          }}
        />
        {mobileError && <span className="text-danger">{mobileError}</span>}
        <button className="otp-button" onClick={sendOTP} disabled={  !phoneNumber || otpSent}>
          {otpSent ? 'Resend OTP' : 'Send OTP'}
        </button>
        {otpSent && (
          <div>
            <input
              type="text"
              className="otp-input"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="otp-button" onClick={verifyOTP}>Verify</button>
            <button className="otp-button" id="ref" onClick={resetOTP}>Refresh</button>
          </div>
        )}
        {verified && (
          <div className="button-container" id="ref1">
            <Link to="/address" className="link-button">Next</Link>
          </div>
        )}
      </div>
      <div className="button-container" id="bk">
        <Link to="/form" className="link-button">Back</Link>
      </div>
    </div>
  );
};

export default OTPComponent;
