import { IPerson } from "../../../types";

const getPeople = {
    getTrendingPeople: async (): Promise<IPerson[]> => {
        const response = await fetch(
            `https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        return data.results;
    },
};

export default getPeople;