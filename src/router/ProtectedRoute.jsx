import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";

const ProtectedRoute = ({ children }) => {
  const { user, authLoading } = useUserAuth();
  const location = useLocation();

  if (authLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default ProtectedRoute;
