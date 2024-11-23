import React, {FC} from 'react';
import Link from "next/link";
import {IMovie} from "../../../../../types";
import StarsRating from "@/app/components/StarsRating/StarsRating";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";


interface IProps {
    movie: IMovie;
}
const MovieDetails: FC<IProps> = ({movie }) => {
    return (
        <div>
            <Link href={`/movies/${movie.id}`}>
                <li key={movie.id} className="movie-item">

                    <PosterPreview posterPath={movie.poster_path} />
                    <h3>{movie.title}</h3>

                    <p>Vote: {Math.round( movie.vote_average)}</p>
                    <StarsRating rating={movie.vote_average}/>
                </li></Link>



        </div>
    );
};
export default MovieDetails;