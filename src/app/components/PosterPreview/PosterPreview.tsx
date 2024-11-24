// /src/components/PosterPreview.tsx

const PosterPreview = ({ posterPath }: { posterPath: string }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w185${posterPath}`;
    return (
        <div className="poster-preview">
            <img
                src={posterUrl}
                alt="Movie Poster"
                width={150} // Impostiamo la larghezza desiderata
                height={225} // Impostiamo l'altezza desiderata
                className="poster-image"
            />
        </div>
    );
};

export default PosterPreview;
