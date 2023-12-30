import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = '37b87adb';

  const searchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
      if (response.data.Response === 'True') {
        const movieDetailsPromises = response.data.Search.map(async (movie) => {
          const detailsResponse = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`);
          return detailsResponse.data;
        });

        const moviesWithDetails = await Promise.all(movieDetailsPromises);
        setMovies(moviesWithDetails);
        setError(null);
      } else {
        setMovies([]);
        setError(response.data.Error);
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      searchMovies();
    }
  }, [searchTerm]);

  return (
    <div className="movie-search-container">
      <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-details">
              <h3>{movie.Title}</h3>
              <p>
                <i className="fas fa-calendar-alt"></i> Year: {movie.Year}
              </p>
              <p>
                <i className="fas fa-film"></i> Type: {movie.Type}
              </p>
              <p id='plot'>
                <i className="fas fa-align-left"></i> Plot: {movie.Plot}
              </p>
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                IMDb
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
