import { useEffect, useState } from 'react';
// import movies from '../movies.json';
import { get } from '../utils/httpClien';
import { MovieCard } from './MovieCard';
import style from './MoviesGrid.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';

export function MoviesGrid({search}){
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(()=>{
        const searchUrl = search ? `/search/movie?query=${search}"&page=${page}`:`/discover/movie?page=${page}`; 
        get(searchUrl).then((data)=>{
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
        })
    },[search,page]);
    return(
        <InfiniteScroll
         dataLength={movies.length}
         hasMore={hasMore}
         next={()=>setPage((prevPage)=>prevPage + 1)} >
            <ul className={style.moviesGrid}>
                {movies.map((movie)=>(<MovieCard key={movies.id} movie = {movie} />))}
            </ul>
        </InfiniteScroll>
    );
}