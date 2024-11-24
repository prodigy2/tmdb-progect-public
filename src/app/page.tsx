import React from 'react';
import getMovies from "@/app/services/api.movies";
import getSeries from "@/app/services/api.series";
import getPeople from "@/app/services/api.people";
import MovieGridComponent from "@/app/components/MovieGridComponent/MovieGridComponent";
import SeriesGridComponent from "@/app/components/SeriesGridComponent/SeriesGridComponent";
import PeopleGridComponent from "@/app/components/PeopleGridComponent/PeopleGridComponent";
import './home.css';

const HomePage = async () => {
    // Fetch data
    const popularMovies = await getMovies.getAllMovies();
    const popularSeries = await getSeries.getPopularSeries();
    const trendingPeople = await getPeople.getTrendingPeople();

    return (
        <div className="homepage">
            <section className="homepage-section movie-section">
                <h2>Popular Movies</h2>
                <MovieGridComponent movies={popularMovies.slice(0, 6)} />
            </section>

            <section className="homepage-section series-section">
                <h2>Popular Series</h2>
                <SeriesGridComponent series={popularSeries.slice(0, 6)} />
            </section>

            <section className="homepage-section people-section">
                <h2>Trending Actors</h2>
                <PeopleGridComponent people={trendingPeople.slice(0, 12)} />
            </section>
        </div>
    );
};

export default HomePage;
