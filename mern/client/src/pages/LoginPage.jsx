import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
const userCredentials = {};
export function LoginPage() {
  const location = useLocation();
  const { login } = useAuth();
  return (
    <Fragment>
      <button onClick={() => login(userCredentials, location.state?.from)}>
        Login
      </button>
    </Fragment>
  );
}
