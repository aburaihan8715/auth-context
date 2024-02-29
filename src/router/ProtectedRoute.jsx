import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const location = useLocation();

  // console.log(location);

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default ProtectedRoute;
