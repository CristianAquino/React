import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { roles } from "../helpers/roles";

export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const history = useNavigate();
  const login = (userCredentials, fromLocation) => {
    setUser({
      id: 1,
      name: "Cristian",
      email: "cristian@gmail.com",
      role: roles.regular,
    });
    if (fromLocation) return history(fromLocation);
  };

  const logout = () => setUser(null);
  const updateUser = (data) => {
    setUser({ ...user, ...data });
  };
  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;
  const contextValue = {
    user,
    updateUser,
    isLogged,
    hasRole,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
