import React, {FC} from "react";


type MovieInfoProps = {
    description: string;
    badges: number[];
};

const MovieInfo: FC<MovieInfoProps> = ({ description, badges }) => {
    return (
        <div className="movie-info">
            <p>{description}</p>
            <div className="genre-badges">
                {badges.map((badge, index) => (
                    <span key={index} className="badge">
            {badge}
          </span>
                ))}
            </div>
        </div>
    );
};

export default MovieInfo;

