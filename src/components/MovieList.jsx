import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import SearchBox from "./SearchBox";

const MovieList = () => {
  const API_KEY = "ce762116";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQuery] = useState("batman");
  const [activateModal, setActivateModal] = useState(false);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
      .then((res) => res)
      .then((res) => res.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
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
      {data !== null &&
        data.length > 0 &&
        data.map((result, index) => <Movie key={index} {...result} />)}
    </div>
  );
};

export default MovieList;
