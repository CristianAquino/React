import { Fragment } from "react";
import { MoviesGrid } from "./MoviesGrid";
import style from './App.module.css';
export function App(){
    return (
        <Fragment>
            <header>
                <h1 className={style.title}>Movies</h1>
            </header>
            <main>
                <MoviesGrid />
            </main>
        </Fragment>
    );
}