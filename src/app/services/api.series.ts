import { ISeries } from "../../../types";

const getSeries = {
    getPopularSeries: async (): Promise<ISeries[]> => {
        const response = await fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        return data.results;
    },
};

export default getSeries;
