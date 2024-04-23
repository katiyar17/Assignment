import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Otp.css';

const OTPComponent = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendOTP = () => {
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
    setName('');
    setPhoneNumber('');
    setOtpSent(false);
    setOtp('');
    setVerified(false);
    setGeneratedOTP('');
  };

  return (
    <div className="otp-container">
      <h2 className='my-heading'>Verify Your Otp here!</h2>
      <div className="otp-form">
        <input
          type="text"
          className="otp-input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="otp-input"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="otp-button" onClick={sendOTP} disabled={!name || !phoneNumber || otpSent}>
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
            <button className="otp-button" id='ref' onClick={resetOTP}>Refresh</button>
          </div>
        )}
        {verified && (
          <div className="button-container" id='ref1'>
            <Link to="/address" className="link-button">Next</Link>
          </div>
        )}
      </div>
      <div className="button-container" id='bk'>
        <Link to="/form" className="link-button">Back</Link>
      </div>
    </div>
  );
};

export default OTPComponent;
