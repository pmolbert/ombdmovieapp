import React from "react";

const MovieDetails = (props) => {
  return (
    <div>
      <img src={props.Poster} alt={props.Title} />
      <div>{props.Title}</div>
      <div>{props.Year}</div>
      <div>{props.imdbRating}</div>
      <div>{props.Rated}</div>
      <div>{props.Runtime}</div>
      <div>{props.Genre}</div>
      <div>{props.Actors}</div>
      <div>{props.Plot}</div>
    </div>
  );
};

export default MovieDetails;
