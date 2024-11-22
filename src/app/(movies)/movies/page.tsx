import React from 'react';
import getMovies from "@/app/services/api.movies";
import {IMovie} from "../../../../types";
import MovieDetails from "@/app/(movies)/movies/MoviesDetails/MovieDetails";




const MoviesPage = async () => {
    const allMovies = await getMovies.getAllMovies();

    return (
        <div className="movies">
            <ul className="movie-grid">
                {Array.isArray(allMovies) && allMovies.length > 0
                    ? allMovies.map((movie: IMovie) => (
                        <MovieDetails key={movie.id} movie={movie} />
                    ))
                    : <p>No movies available</p>
                }
            </ul>
        </div>
    );
};

export default MoviesPage;