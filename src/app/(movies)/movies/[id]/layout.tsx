import React from 'react';
import {Metadata} from "next";
import getMovies from "@/app/services/api.movies";

export const generateMetadata = async ({params}: {params: {id: string} }): Promise<Metadata> => {
    const movie  = await getMovies.getMovieById( params.id);
    console.log(movie);
    return {title: 'movie?.title'}
}
type Props = { children: React.ReactNode }
const MovieLayout = ({children}: Props) => {
    return (
        <div>

            {children}
        </div>
    );
};

export default MovieLayout;