import React, { FC } from "react";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";
import StarsRating from "@/app/components/StarsRating/StarsRating";
import MovieInfo from "@/app/components/MovieInfo/MovieInfo";
import {IMovie } from "../../../../types";

type IProps = {
    movie: IMovie;
};

const MoviesListCard: FC<IProps> = ({ movie }) => (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px" }}>
        <PosterPreview posterPath={movie.poster_path} />
        <h3>{movie.title}</h3>
        <StarsRating rating={movie.vote_average} />
        <MovieInfo description={movie.overview} badges={movie.genre_ids} />
    </div>
);

export default MoviesListCard;

