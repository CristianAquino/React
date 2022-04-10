import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { Movie } from "./Movie";

export function MovieList() {
  const { movies } = useContext(MoviesContext);
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
