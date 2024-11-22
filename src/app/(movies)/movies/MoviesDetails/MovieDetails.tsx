import React, {FC} from 'react';
import Link from "next/link";
import {IMovie} from "../../../../../types";

interface IProps {
    movie: IMovie;
}
const MovieDetails: FC<IProps> = ({movie }) => {
    return (
        <div>
            <Link href={`/movies/${movie.id}`}>
                <li key={movie.id} className="movie-item">

                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <h3>{movie.title}</h3>
                    <p>Vote: {movie.vote_average}</p>
                </li></Link>



        </div>
    );
};
export default MovieDetails;