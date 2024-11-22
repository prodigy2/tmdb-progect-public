import React, {FC} from "react";

type PosterPreviewProps = {
    posterPath: string;
}
const PosterPreview: FC<PosterPreviewProps> = ({ posterPath }) => (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="Poster"
            style={{ width: "100%", objectFit: "cover" }}
        />
    </div>
);

export default PosterPreview;
