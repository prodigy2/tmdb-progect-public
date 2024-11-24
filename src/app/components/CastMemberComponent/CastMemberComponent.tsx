// /src/components/CastMemberComponent.tsx
import React from "react";
import Link from "next/link";

interface CastMemberProps {
  id: number;
  name: string;
  profilePath: string;
}

const CastMemberComponent: React.FC<CastMemberProps> = ({ id, name, profilePath }) => {
  const imageUrl = profilePath
    ? `https://image.tmdb.org/t/p/w185${profilePath}`
    : "/placeholder.png";  // Fallback per l'immagine, se non c'è il path

  return (
    <div className="cast-member">

        <img
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className="rounded-full hover:opacity-80 transition-transform transform hover:scale-110"
        />

      <p className="text-center text-sm mt-2">{name}</p>
    </div>
  );
};

export default CastMemberComponent;
