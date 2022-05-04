import React, { useState } from "react";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import MovieListingPage from "./components/MovieListingPage";
import { MoviesContext } from "./context/movies-context";
import { ModalContext } from "./context/modal-context";

function App() {
  const [fetchedMovies, setFetchedMovies] = useState<Array<object>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="App">
      <ModalContext.Provider value={{ isVisible, setIsVisible }}>
        <MoviesContext.Provider
          value={{
            fetchedMovies,
            setFetchedMovies,
            isLoading,
            setIsLoading,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/movies" element={<MovieListingPage />} />
          </Routes>
        </MoviesContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
