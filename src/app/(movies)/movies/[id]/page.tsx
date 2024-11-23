import React from 'react';
import getMovies from "@/app/services/api.movies";


type Params = { id: string, title: string, info: string, release_date: number;};

const MoviePage = async ({params}: {params: Params}) => {

    const movie = await getMovies.getMovieById( params.id)

    return (
        <div className={"movie-box"}>
            <div className={'movie_card'}><img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie?.title}/></div>

            <div className={"movie-text"}><h1>{movie?.title}</h1>
                <h4>{movie?.tagline}</h4>
                <p> {movie?.tagline}{movie?.origin_country}
                    {movie?.badges}{movie?.popularity} </p>

                    <h3>{JSON.stringify(movie?.overview)}</h3>
                    <p>{movie?.release_date})
                        {movie?.runtime}:{movie?.status}
                        {movie?.name}:{movie?.vote_average}
                    </p>
            </div>
        </div>
    );
};

export default MoviePage;