import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClien';
// import movie from './movie.json';
import style from './MovieDetails.module.css';

export function MovieDetails(){
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        get(`/movie/${movieId}`).then((data) => setMovie(data))
    },[movieId]);

    if(!movie) return null;

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    
    return (
        <div className={`${style.detailsContainer}`}>
            <img className={`${style.col} ${style.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${style.col} ${style.movieDetails}`}>
                <p><strong>Title:</strong> {movie.title}</p>
                <p><strong>Genrens:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    );
}