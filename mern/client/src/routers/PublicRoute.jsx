import { Fragment } from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export function PublicRoute({ children }) {
  const { isLogged } = useAuth();
  return isLogged() ? <Navigate to="/projects" /> : children;
}
