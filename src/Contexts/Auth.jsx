import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

// Create context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
    success: false,
    message: ''
  });

  // Set base URL for axios
  axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;

  // Update axios headers when auth changes
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`;
  }, [auth?.token]);

  // Retrieve the user from cookies
  useEffect(() => {
    const data = Cookies.get('auth');
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({
        user: parsedData.user,
        token: parsedData.token,
        success: parsedData.success,
        message: parsedData.message
      });
    }
  }, []);

  const login = async (formData) => {
    try {
      const { data } = await axios.post('/auth/login', formData);

      if (!data?.error) {
        setAuth({ user: data.user, token: data.token, success: data.success, message: data.message });
        Cookies.set('auth', JSON.stringify(data), { expires: 7 }); // Cookie expires in 7 days
        return data;
      } else {
        return false;
      }
    } catch (error) {
      console.log('Login error:', error?.response?.data?.message);
      throw new Error(error?.response?.data?.message || 'An error occurred while logging in');
    }
  };

  const signup = async (formData) => {
    try {
      const { data } = await axios.post('/auth/signup', formData);

      if (!data.error) {
        // setAuth({ user: data.user, token: data.token, success: data.success, message: data.message });
        // Cookies.set('auth', JSON.stringify(data), { expires: 7 }); // Cookie expires in 7 days
      } else {
        console.log(data.error);
      }

      return data;
    } catch (error) {
      console.log('Signup Error:', error);
      throw new Error(error?.response?.data?.message || 'An error occurred while signing up');
    }
  };

  const logout = () => {
    Cookies.remove('auth');
    setAuth({ user: null, token: '', success: false, message: '' });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
