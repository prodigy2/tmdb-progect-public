import {IGenre, IMovie} from "../../../types";


const getGenres = {
    getAllGenres: async (): Promise<IGenre[]> => {
        const genre = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(res => res.json());
        console.log(genre);
        return genre.genres;

    },
    getGenreById: async (id: string | number): Promise<IMovie | null> => {
        const genre = await fetch( `https://api.themoviedb.org/3/genre/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(res => res.json());
        console.log(genre);
        return genre;
    }

}

export default getGenres


