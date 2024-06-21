import React, { useState, useRef, ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import logo from './svg/logo.svg';
import facebook from './svg/facebook.svg';
import instagram from './svg/instagram.svg';
import { baseURL } from './URL';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { Audio, LineWave } from 'react-loader-spinner';

const VerifyEmail: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [resendClicked, setResendClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");



  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if value is not empty and current index is not the last one
      if (value !== '' && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };



  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit =  async  (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpCode = otp.join('');
    console.log('OTP submitted:', otpCode);
   
    const apiUrl = `${baseURL}/Account/VerifyToken`;
    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         token : otpCode
        }),
      });
  
      const data = await response.json();
      
      if (response.ok && data.succeeded) {
        // window.localStorage.setItem("email", data.data.emailAddress);
        // window.localStorage.setItem("token", data.data.jwtToken);
        navigate('/SignIn');
        toast.success('Email verified successfully, Log in to your account');
      } else {
        toast.error(data.message || 'An error occurred while verifying email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred while verifying email');
    } finally {
      setLoading(false);
    }
  };
    
 

  const handleResend = () => {
    setResendClicked(true);
    console.log('Resend OTP');
    // Add your resend OTP logic here
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-cover bg-center r overflow-hidden"
        style={{
          backgroundImage: 'url(images/formbanner.png)',
        }}
      >
        <div className="min-h-screen flex items-center justify-start bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url(images/formbanner.png)' }}>
        <div className="w-full max-w-md bg-white rounded-lg shadow dark:border p-6 space-y-4 md:space-y-6 mx-5 mt-3 md:mx-10 md:my-10">
            <div className="flex justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div className="my-1 flex justify-center text-lg font-medium leading-tight tracking-tight text-gray-900 md:text-xl">
                Email Verification
            </div>
            <div className="flex justify-center text-sm leading-tight tracking-tight text-gray-900 my-1">
              Please enter the OTP sent to your email address.
            </div>
            <form className="space-y-20 md:space-y-20" onSubmit={handleSubmit}>
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                {otp.map((digit, index) => (
                  <div key={index} className="w-16 h-16">
                    <input
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center text-sm leading-tight tracking-tight text-gray-900 my-1">
                Did not receive code?{' '}
                <button
                  type="button"
                  className="text-blue-700 underline"
                  onClick={handleResend}
                >
                  Resend
                </button>
              </div>

              <div className='mb-20'>
              <button type="submit" className="bg-customBlue text-white p-2.5 rounded-md w-full flex items-center justify-center space-x-2">
              <span> Verify</span>
              {loading && (
                <LineWave
                  visible={true}
                  height="40"
                  width="1000"
                  color="#fff"
                  ariaLabel="line-wave-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  firstLineColor=""
                  middleLineColor=""
                  lastLineColor=""
                />
              )}
            </button>
              </div>
            </form>

            <div className="flex justify-center text-sm leading-tight tracking-tight text-gray-900 ">
            You already have an account? Sign In.
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
