import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MovieDetails = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={props.Poster} alt={props.Title} />
        </Col>
        <Col>
          <Row>
            <Col>
              <div>{props.Title}</div>
            </Col>
            <Col>
              <div>{props.Year}</div>
            </Col>
            <Col>
              <div>{props.imdbRating}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>{props.Rated}</div>
              <div>{props.Runtime}</div>
              <div>{props.Genre}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>{props.Actors}</div>
              <div>{props.Plot}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
