import React, { useState, useEffect, useRef } from 'react';
import { Phone, KeyRound } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const features = [
  { title: "Empower Your Choices: Understand Ingredients, Prioritize Health" },
  { title: "Simplify Ingredients, Amplify Wellness" },
  { title: "Find What's Best for You and Your Loved Ones" },
  { title: "Make Smart, Health-Conscious Decisions Instantly" },
];

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(45);
  const [canResendOtp, setCanResendOtp] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer;
    if (isOtpSent && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResendOtp(true);
    }
    return () => clearInterval(timer);
  }, [isOtpSent, resendTimer]);

  const handleFocusInput = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  const handleSendOtp = () => {
    if (phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
    } else {
      setError('');
      setIsOtpSent(true);
      setResendTimer(45);
      setCanResendOtp(false);
    }
  };

  const handleVerifyOtp = () => {
    console.log('Verifying OTP:', otp);
  };

  const handleResendOtp = () => {
    if (canResendOtp) {
      handleSendOtp();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-green-100 via-blue-100 to-green-200">
      <div className="flex-grow p-6 flex flex-col justify-between items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to Ingreli</h1>
          <div key={currentFeature} className="mb-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">{features[currentFeature].title}</h2>
          </div>
        </div>
        
        <div className="flex justify-center space-x-2 mt-4">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFeature(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                index === currentFeature ? 'bg-green-500 scale-125' : 'bg-green-300 hover:bg-green-400'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col justify-center items-center" ref={inputRef}>
        <div className="w-full max-w-md space-y-4">
          <div className="relative h-14">
            <div className={`absolute w-full transition-all duration-500 ease-in-out ${isOtpSent ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
              <div className="flex items-center space-x-2 bg-white bg-opacity-90 rounded-lg p-2 shadow-md">
                <Phone className="text-green-600" />
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onFocus={handleFocusInput}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-grow border-none focus:ring-0"
                />
              </div>
            </div>
            <div className={`absolute w-full transition-all duration-500 ease-in-out ${isOtpSent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="flex items-center space-x-2 bg-white bg-opacity-90 rounded-lg p-2 shadow-md">
                <KeyRound className="text-green-600" />
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onFocus={handleFocusInput}
                  onChange={(e) => setOtp(e.target.value)}
                  className="flex-grow border-none focus:ring-0"
                />
              </div>
            </div>
          </div>
          <Button 
            onClick={isOtpSent ? handleVerifyOtp : handleSendOtp} 
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            {isOtpSent ? (isLoading ? 'Verifying...' : 'Verify OTP') : (isLoading ? 'Sending...' : 'Send OTP')}
          </Button>
          {isOtpSent && (
            <p className="text-sm text-center text-green-800">
              Didn't receive OTP? <button onClick={handleResendOtp} className={`text-blue-600 hover:underline ${canResendOtp ? '' : 'opacity-50 cursor-not-allowed'}`} disabled={!canResendOtp}>
                {canResendOtp ? 'Resend OTP' : `Resend in ${resendTimer}s`}
              </button>
            </p>
          )}
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        
        <p className="text-sm text-gray-600 mt-6 text-center">
          By signing up, you agree to our{' '}
          <a href="/terms-and-conditions" className="text-blue-600 hover:underline">
            Terms and Conditions
          </a>.
        </p>
      </div>
    </div>
  );
}