import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isAuthenticated = localStorage.getItem('token'); // or check if `user` exists

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
