// /src/components/CastMemberComponent.tsx
import React from "react";

interface CastMemberProps {
  name: string;
  profilePath: string;
}

const CastMemberComponent: React.FC<CastMemberProps> = ({ name, profilePath }) => {
  const imageUrl = profilePath
    ? `https://image.tmdb.org/t/p/w185${profilePath}`
    : "/placeholder.png"; // Fallback per l'immagine, se non c'è il path

  return (
    <div className="cast-member">
      <img src={imageUrl} alt={name} />
      <p className="cast-member-name">{name}</p>
    </div>
  );
};

export default CastMemberComponent;
