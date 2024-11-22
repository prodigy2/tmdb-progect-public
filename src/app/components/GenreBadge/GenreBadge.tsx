import React, {FC} from "react";


type IProps = {
    genre: string;
};

const GenreBadge: FC<IProps> = ({ genre }) => {
    return <span className="genre-badge">{genre}</span>;
};

export default GenreBadge;

