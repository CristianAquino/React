import { createContext, useState } from "react";

export const UserContext = createContext();

const initialUser = {
  id: 1,
  name: "Cristian",
  favoriteMovies: [1, 2],
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };
  const logout = () => {
    setUser(null);
  };
  const toggleFavoriteMovieToUser = (movieId) => {
    const isFavorite = user.favoriteMovies.includes(movieId);
    const favoriteMovies = isFavorite
      ? user.favoriteMovies.filter((favo) => favo !== movieId)
      : [...user.favoriteMovies, movieId];
    setUser({ ...user, favoriteMovies });
  };
  const data = { user, login, logout, toggleFavoriteMovieToUser };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
