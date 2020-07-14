import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import SearchBox from "./SearchBox";
import { Container, Row, Modal } from "react-bootstrap";
import MovieDetails from "./MovieDetails";

const MovieList = () => {
  const API_KEY = "ce762116";
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQuery] = useState("batman");
  const [activateModal, setActivateModal] = useState(false);
  const [details, setShowDetails] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);

  useEffect(() => {
    setLoading(true);
    setMovies(null);
    setError(null);

    fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
      .then((res) => res)
      .then((res) => res.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setMovies(response.Search);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [q]);

  return (
    <div>
      <SearchBox searchHandler={setQuery} />
      <Container>
        <Row>
          {movies !== null &&
            movies.length > 0 &&
            movies.map((result, index) => (
              <Movie
                key={index}
                showDetails={setShowDetails}
                detailRequest={setDetailRequest}
                activateModal={setActivateModal}
                {...result}
              />
            ))}
        </Row>
        <Modal show={activateModal} onHide={() => setActivateModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MovieDetails {...details} />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default MovieList;
