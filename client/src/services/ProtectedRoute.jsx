import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirectTo = "/login" }) => {
  const userToken = localStorage.getItem("userToken");

  if (!userToken) {
    return <Navigate to={redirectTo} replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
