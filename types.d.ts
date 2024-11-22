export interface IMovie {
    id: number;
    title: string;
    description: string;
    category: 'comedy' | 'fantasy';
    createdAt: string;
    updatedAt: string;
    likesAmount: number;
    poster_path: string;
    overview: string;
    vote_average: number;
}
export interface IGenre {
    id: number;
    name: string;
}

