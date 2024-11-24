import React from 'react';
import Link from 'next/link';
import { ISeries } from "@/types";

const SeriesGridComponent = ({ series }: { series: ISeries[] }) => {
  return (
    <div className="grid-container">
      {series.map((serie) => (
        <Link key={serie.id} href={`/series/${serie.id}`} passHref>
          <div className="card series-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              alt={serie.name}
              className="card-img"
            />
            <h3 className="card-title">{serie.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SeriesGridComponent;
