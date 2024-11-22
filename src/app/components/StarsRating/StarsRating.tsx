import React, {FC} from "react";

type StarsRatingProps = {
    rating: number;
};

const StarsRating: FC<StarsRatingProps> = ({ rating }) => {
    const stars = Math.round(rating / 2); // Assume un punteggio su 10
    return (
        <div className="stars-rating">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
        </div>
    );
};

export default StarsRating;
