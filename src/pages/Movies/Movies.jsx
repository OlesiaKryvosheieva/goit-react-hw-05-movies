import { searchFilm } from 'components/API';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const handleInput = e => {
    e.preventDefault();

    const value = e.target.elements[0].value;

    setSearchParams({ searchQuery: value });

    e.target.elements[0].value = '';
  };

  useEffect(() => {
    searchFilm(searchQuery)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, [searchQuery]);

  return (
    <div>
      <form onSubmit={handleInput} className={css.form}>
        <input type="text" className={css.formInput} />
        <button type="submit">Search</button>
      </form>
      <div className={css.listOfMovies}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                className={css.linkOfMovie}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </div>
    </div>
  );
};

export default Movies;
