import { useAuth } from '../Contexts/Auth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { auth } = useAuth();

  // If user is authenticated, render the child components, otherwise redirect to login
  return auth.user != null ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
