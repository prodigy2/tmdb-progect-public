import React, {FC} from 'react';
import MoviesListCard from "@/app/components/MoviesListCard/MoviesListCard";
import {IProps} from "../../../../types";



const MoviesList: FC<IProps> = ({ movies }) => {
    return (
        <div className="movies-list">
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;
