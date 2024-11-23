import React, {FC} from 'react';
import Link from "next/link";
import {IGenre} from "../../../../../types";

interface IProps {
    genre: IGenre;
}
const GenreDetails: FC<IProps> = ({genre }) => {
    return (
        <div>
            <Link href={`/genres/${genre.id}`}><button className={"genres-button"}>{genre.name}</button></Link>

        </div>
    );
};
export default GenreDetails;