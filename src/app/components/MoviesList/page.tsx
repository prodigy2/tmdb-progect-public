import React, {FC}  from 'react';
import Link from "next/link";

type Props = {
    movies : { id: number, name: string } []

}

const MoviesListPage : FC<Props> = ({movies}) => {
    return (
        <div>
            {
                movies.map(({id, name}) => (<div key={id}>
                    <Link href={'/movies/' + id}>{name}</Link>
                </div>))
            }
            
        </div>
    );
};

export default MoviesListPage;