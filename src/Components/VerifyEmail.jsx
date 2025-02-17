import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/Bizfides logo.svg';

const VerifyEmail = () => {
  const { token } = useParams(); // Get the token from the URL
  const [status, setStatus] = useState('Verifying your email...');
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmailToken = async () => {
      try {
        const { data } = await axios.post(`/auth/verify-email/${token}`);
        if (data.success) {
          setStatus('Email verified successfully!');
          const timer = setInterval(() => {
            setCountdown((prevCountdown) => {
              if (prevCountdown <= 1) {
                clearInterval(timer);
                navigate('/login');
                return 0;
              }
              return prevCountdown - 1;
            });
          }, 1000);
        }
      } catch (error) {
        setStatus(error.response?.data?.message || 'Verification failed');
      }
    };

    verifyEmailToken();
  }, [token, navigate]);
  console.log(token);
  

  return (
    <div className="flex flex-col items-center justify-start h-screen py-20">
      <div className="bg-white p-6 flex flex-col items-center  max-w-md w-full text-center gap-4">
        <Link to='/'>
        
        <img src={logo} alt="" className='w-[100px]' />
        </Link>
        <h1 className="text-2xl font-semibold mb-4">{status}</h1>
        {status === 'Email verified successfully!' && (
          <p className="text-lg">
            You will be redirected to the login page in{' '}
            <span className="font-bold">{countdown}s</span>.
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
