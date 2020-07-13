import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
