import { getMovies } from 'components/API';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies()
      .then(response => response.json())
      .then(data => setFilms(data.results));
  }, []);

  return (
    <div className={css.containerForFilms}>
      <h1 className={css.title}>Trending today </h1>
      {films &&
        films.map(film => (
          <li key={film.id}>
            <Link
              to={`/movies/${film.id}`}
              state={{ from: location }}
              className={css.link}
            >
              {film.title}
            </Link>
          </li>
        ))}
    </div>
  );
};

export default Home;
