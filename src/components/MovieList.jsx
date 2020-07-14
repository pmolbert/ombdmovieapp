import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import SearchBox from "./SearchBox";
import MovieDetails from "./MovieDetails";
import Paginate from "./Pagination";
import { Container, Row, Modal, Spinner, Alert } from "react-bootstrap";

const MovieList = () => {
  const API_KEY = "ce762116";
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQuery] = useState("jaws");
  const [activateModal, setActivateModal] = useState(false);
  const [details, setShowDetails] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
          setTotalResults(response.totalResults);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [q]);

  const nextPage = (pageNumber) => {
    setLoading(true);
    setMovies(null);
    setError(null);
    setCurrentPage(pageNumber);

    fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}&page=${pageNumber}`)
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
  };

  return (
    <div>
      <SearchBox searchHandler={setQuery} />
      <Container>
        <Row>
          {loading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}

          {error !== null && <Alert variant="danger">{error}</Alert>}

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
            {detailRequest === false ? (
              <MovieDetails {...details} />
            ) : (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </Modal.Body>
        </Modal>
        {totalResults > 10 ? (
          <Paginate
            pages={totalResults}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default MovieList;
