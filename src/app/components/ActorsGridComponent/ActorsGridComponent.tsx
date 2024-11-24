'use client';

import React, { useState, useEffect } from 'react';
import getMovies from "@/app/services/api.movies";
import './actorsGrid.css';

const ActorsGridComponent = () => {
    const [actors, setActors] = useState<any[]>([]);
    const [expandedActor, setExpandedActor] = useState<number | null>(null); // Attore espanso
    const [actorMovies, setActorMovies] = useState<{ [key: number]: any[] }>({}); // Film per attore

    useEffect(() => {
        const fetchActors = async () => {
            const trendingActors = await getMovies.getTrendingActors();
            setActors(trendingActors);
        };

        fetchActors();
    }, []);

    const handleActorClick = async (actorId: number) => {
        if (expandedActor === actorId) {
            // Se è già espanso, lo chiudiamo
            setExpandedActor(null);
            return;
        }

        // Recupera i film dell'attore selezionato
        if (!actorMovies[actorId]) {
            const movies = await getMovies.getMoviesByActor(actorId);
            setActorMovies((prev) => ({ ...prev, [actorId]: movies }));
        }

        setExpandedActor(actorId);
    };

    return (
        <div className="actors-grid-container">
            <ul className="actors-grid">
                {actors.map((actor) => (
                    <li key={actor.id} className="actor-card">
                        <div onClick={() => handleActorClick(actor.id)}>
                            <img
                                src={
                                    actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                        : '/placeholder-avatar.png'
                                }
                                alt={actor.name}
                                className="actor-photo"
                            />
                            <p className="actor-name">{actor.name}</p>
                        </div>
                        {expandedActor === actor.id && (
                            <ul className="movies-list">
                                {actorMovies[actor.id]?.length > 0 ? (
                                    actorMovies[actor.id].map((movie) => (
                                        <li key={movie.id} className="movie-item">
                                            <a href={`/movies/${movie.id}`} className="movie-link">
                                                {movie.title}
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    <p>No movies available</p>
                                )}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActorsGridComponent;
