import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import requests from "./requests";
import axios from "./setAxios";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      console.log(request.data);
      setMovies(request.data.results);
    }
    fetchData();
    return () => {};
  }, [selectedOption]);
  return (
    <div className="results">
      <FlipMove>
        {movies?.map((movie) => {
          return <VideoCard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
}

export default Results;
