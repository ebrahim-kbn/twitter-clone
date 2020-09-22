import React, { forwardRef } from "react";
import "./VideoCard.css";
import BgImage from "./images/bg-image.jpg";
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";
const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="…"
        text={movie.overview}
        // textTruncateChild={<a href="#">Read on</a>}
      />
      <h2>{movie.title || movie.original_titlt}</h2>
      <p>
        {movie.media_type && `${movie.media_type} . `}
        {movie.release_date || movie.first_air_date} <ThumbUpSharpIcon />{" "}
        {movie.vote_count}
      </p>
    </div>
  );
});
export default VideoCard;
