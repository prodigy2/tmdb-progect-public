import React from 'react';
import getMovies from "@/app/services/api.movies";


type Params = { id: string, title: string, };

const MoviePage = async ({params}: {params: Params}) => {

    const movie = await getMovies.getMovieById( params.id)

    return (
        <div>
            <div className={'movie_card'}><img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie?.title}/></div>

             {movie?.title}

            <div>{JSON.stringify(movie)}</div>



        </div>
    );
};

export default MoviePage;