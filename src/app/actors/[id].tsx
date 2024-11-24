import React from 'react';
import { useRouter } from 'next/router';
import getPeople from '@/app/services/api.people';

const ActorDetail = async () => {
  const router = useRouter();
  const { id } = router.query;

  // Ottieni il dettaglio dell'attore tramite l'ID
  const actor = await getPeople.getActorById(id);

  if (!actor) return <p>Loading...</p>;

  return (
    <div>
      <h1>{actor.name}</h1>
      <p>{actor.biography}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
      />
    </div>
  );
};

export default ActorDetail;
