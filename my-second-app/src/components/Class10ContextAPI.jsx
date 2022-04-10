import { Fragment } from "react";
import { MovieList } from "./MovieList";
import { NavbarClass10 } from "./NavbarClass10";
import { UserProvider } from "../contexts/UserContext";
import { MoviesProvider } from "../contexts/MoviesContext";

const Class10ContextAPI = () => {
  return (
    <Fragment>
      <UserProvider>
        <MoviesProvider>
          <NavbarClass10 />
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </Fragment>
  );
};
export default Class10ContextAPI;
