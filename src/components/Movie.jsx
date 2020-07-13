import React from "react";

const Movie = (props) => {
  return (
    <div>
      <img src={props.Poster} alt={props.Title} />
      <div>{props.Title}</div>
      <div>{props.imdbID}</div>
      <div>{props.Type}</div>
    </div>
  );
};

export default Movie;
