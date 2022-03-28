import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import style from './App.module.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export function App(){
    return (
        <BrowserRouter>
            <header>
                <Link to="/"><h1 className={style.title}>Movies</h1></Link>
            </header>
            <main>
                <Routes>
                    <Route path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}