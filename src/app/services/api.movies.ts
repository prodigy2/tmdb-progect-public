import {IMovie} from "../../../types";


 const getMovies = {

     getAllMovies: async (): Promise<IMovie[]> => {
         const movies = await fetch( `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
             .then(value => value.json());
         console.log(movies);

         return movies.results;
     },
     getMovieById: async (id: string | number): Promise<IMovie | null> => {
         const movie = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
             .then(value => value.json());
         console.log(movie);
         return movie;
     },
     getMovieByGenre: async (id: string | number): Promise<IMovie | null> => {
         const movie = await fetch( `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${id}`)
             .then(value => value.json());
         console.log(movie);
         return movie.results;
     },
     //https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=GENRE_ID

 }

 export default getMovies

