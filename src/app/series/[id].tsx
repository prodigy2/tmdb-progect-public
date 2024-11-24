import React from 'react';
import { useRouter } from 'next/router';
import getSeries from '@/app/services/api.series';

const SeriesDetail = async () => {
  const router = useRouter();
  const { id } = router.query;

  // Ottieni il dettaglio della serie tramite l'ID
  const series = await getSeries.getSeriesById(id);

  if (!series) return <p>Loading...</p>;

  return (
    <div>
      <h1>{series.name}</h1>
      <p>{series.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
        alt={series.name}
      />
    </div>
  );
};

export default SeriesDetail;
