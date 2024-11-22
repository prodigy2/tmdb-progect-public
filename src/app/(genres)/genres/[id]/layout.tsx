import React from 'react';
import {Metadata} from "next";
import getGenres from "@/app/services/api.genres";

export const generateMetadata = async ({params}: {params: {id: string} }): Promise<Metadata> => {
    const genre  = await getGenres.getGenreById( params.id);
    console.log(genre);
    return {classification: 'genre?.name' }
}
type Props = { children: React.ReactNode }
const GenreLayout = ({children}: Props) => {
    return (
        <div>

            {children}
        </div>
    );
};

export default GenreLayout;