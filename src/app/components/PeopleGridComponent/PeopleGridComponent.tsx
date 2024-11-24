import React from 'react';
import Link from 'next/link';
import { IPerson } from "@/types";

const PeopleGridComponent = ({ people }: { people: IPerson[] }) => {
  return (
    <div className="grid-container">
      {people.map((person) => (
        <Link key={person.id} href={`/actors/${person.id}`} passHref>
          <div className="card people-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
              alt={person.name}
              className="card-img"
            />
            <h3 className="card-title">{person.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PeopleGridComponent;
