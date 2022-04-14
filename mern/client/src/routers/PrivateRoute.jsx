import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export function PrivateRoute({ children, hasRole: role }) {
  const location = useLocation();
  const { hasRole, isLogged } = useAuth();
  if (role && !hasRole(role)) return <Navigate to="/" />;
  return isLogged() ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
