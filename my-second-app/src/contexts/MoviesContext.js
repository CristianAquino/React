import { createContext } from "react";
import initialMovies from "../initialMovies";

export const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const data = { movies: initialMovies };

  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
}
