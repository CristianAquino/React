import movies from '../movies.json';
import { MovieCard } from './MovieCard';
import style from './MoviesGrid.module.css';
export function MoviesGrid(){
    return(
        <ul className={style.moviesGrid}>
            {movies.map((movie)=>(<MovieCard key={movies.id} movie = {movie} />))}
        </ul>
    );
}