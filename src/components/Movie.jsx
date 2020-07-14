import React from "react";
import { Card } from "react-bootstrap";

const Movie = (props) => {
  const API_KEY = "ce762116";

  const openDetailsHandler = () => {
    props.activateModal(true);
    props.detailRequest(true);

    fetch(`http://www.omdbapi.com/?i=${props.imdbID}&apikey=${API_KEY}`)
      .then((res) => res)
      .then((res) => res.json())
      .then((response) => {
        props.detailRequest(false);
        props.showDetails(response);
      })
      .catch(({ message }) => {
        props.detailRequest(false);
      });
  };
  return (
    <Card
      style={{ width: "300px", padding: "15px", margin: "15px" }}
      onClick={openDetailsHandler}
    >
      <Card.Img src={props.Poster} alt={props.Title} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>{props.Year}</Card.Text>
        <Card.Text>{props.Type}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
