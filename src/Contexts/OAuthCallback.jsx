import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginCallback = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const user = params.get('user');

    if (token && user) {
      // Save the token and user info (e.g., in cookies or localStorage)
      Cookies.set('token', token, { expires: 7 });
      Cookies.set('user', user, { expires: 7 });
      
      // Redirect to home or dashboard
      navigate('/');
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default LoginCallback;
