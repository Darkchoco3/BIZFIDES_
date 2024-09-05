import { useAuth } from '../Contexts/Auth';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const { auth } = useAuth();

  // If user is authenticated, redirect to dashboard/home, else render child components
  return auth?.user ? <Navigate to="/profile" /> : <Outlet />;
};

export default PublicRoute;
