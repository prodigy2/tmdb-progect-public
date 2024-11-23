export interface IMovie {
    id: number;
    title: string;
    description: string;
    category: 'comedy' | 'fantasy';
    createdAt: string;
    updatedAt: string;
    likesAmount: number;
    poster_path: string;
    vote_average: number;
    overview: string;
    genre_ids: number[];
    badges:number[];
}
export interface IGenre {
    id: number;
    name: string;
}

export interface IProps {
    movies: IMovie[];
    genres: IGenre[];
    movie: string;
    genre: string;
    overview: string;
    description: string;
    badges: number[];
}

