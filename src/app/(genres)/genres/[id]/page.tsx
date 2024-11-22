import React from 'react';
import getMovies from "@/app/services/api.movies";
import {IMovie} from "../../../../../types";
import MovieDetails from "@/app/(movies)/movies/MoviesDetails/MovieDetails";

type Params = {id: string, title: string, description: string}
const MoviesPage = async ({params}: {params: Params}) => {
    const allMovies = await getMovies.getMovieByGenre(params.id);

    return (
        <div className="movies">
            <ul className="movie-grid">
                {Array.isArray(allMovies) && allMovies.length > 0
                    ? allMovies.map((movie: IMovie) => (
                        <li key={movie.id} className="movie-item">
                            <MovieDetails movie={movie} />
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h3>{movie.title}</h3>
                            <p>Vote: {movie.vote_average}</p>
                        </li>
                    ))
                    : <p>No movies available</p>
                }
            </ul>
        </div>
    );
};

export default MoviesPage;