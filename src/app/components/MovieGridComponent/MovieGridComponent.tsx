import React from 'react';
import Link from 'next/link';
import { IMovie } from "@/types";

const MovieGridComponent = ({ movies }: { movies: IMovie[] }) => {
  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`} passHref>
          <div className="card movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="card-img"
            />
            <h3 className="card-title">{movie.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieGridComponent;
