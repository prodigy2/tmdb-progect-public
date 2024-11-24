// /src/pages/MovieDetailPage.tsx
import React from "react";
import { notFound } from "next/navigation"; // Per gestire errori
import getMovies from "@/app/services/api.movies";
import CastMemberComponent from "@/app/components/CastMemberComponent/CastMemberComponent";
import StarsRating from "@/app/components/StarsRating/StarsRating";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";
import "./styles.css";

interface Props {
    params: { id: string };
}

const MovieDetailPage = async ({ params }: Props) => {
    const { id } = params;

    // Fetch movie details and cast
    const movieDetails = await getMovies.getMovieById(id);
    const movieCast = await getMovies.getMovieCast(id);

    // Gestire il caso in cui il film non esiste
    if (!movieDetails) {
        notFound();
    }

    return (
        <div className="movie-detail-page">
            <h1>{movieDetails.title}</h1>

            {/* Container per il poster e la descrizione */}
            <div className="movie-info-container">
                <div className="movie-poster-container">
                    <PosterPreview posterPath={movieDetails.poster_path} />
                </div>
                <div className="movie-description">
                    <p>{movieDetails.overview}</p>
                    <p>Vote: {Math.round(movieDetails.vote_average)}</p>
                    <StarsRating rating={movieDetails.vote_average} />
                </div>
            </div>

            <section className="movie-cast-section">
                <h2>Cast</h2>
                <div className="cast-grid">
                    {movieCast.slice(0, 12).map((member) => (
                        <CastMemberComponent
                            key={member.id}
                            name={member.name}
                            profilePath={member.profile_path}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MovieDetailPage;
