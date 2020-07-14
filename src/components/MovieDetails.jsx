import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MovieDetails = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            style={{ width: "inherit" }}
            src={props.Poster}
            alt={props.Title}
          />
        </Col>
        <Col>
          <Row>
            <Col>
              <div>{props.Title}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>{props.Year}</div>
            </Col>
            <Col>
              <div>Rating: {props.imdbRating}</div>
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col>
              <div>{props.Rated}</div>
              <div>{props.Runtime}</div>
              <div>{props.Genre}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ marginBottom: "15px" }}>{props.Actors}</div>
              <div>{props.Plot}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
