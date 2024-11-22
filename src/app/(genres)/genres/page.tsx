
import React from 'react';
import getGenres from "@/app/services/api.genres";
import {IGenre} from "../../../../types";
import GenreDetails from "@/app/(genres)/genres/GenreBadgeDetails/GenreDetails";


const GenresPage = async () => {
    const allGenres = await getGenres.getAllGenres();
    return (
        <div>

            <ul>
                {
                    Array.isArray(allGenres) && allGenres.length > 0
                        ? allGenres.map((genre: IGenre) => (


                            <li key={genre.id} > <GenreDetails genre={genre}/></li>
                        ))
                        : <p></p>
                }
            </ul>
        </div>
    );
};

export default GenresPage;
