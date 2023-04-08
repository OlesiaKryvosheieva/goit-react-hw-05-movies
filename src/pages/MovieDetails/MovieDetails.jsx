import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getInfoAboutMovie } from 'components/API';
import { Suspense } from 'react';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [film, setFilm] = useState({});

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getInfoAboutMovie(movieId)
      .then(response => response.json())
      .then(film => setFilm(film));
  }, [movieId]);
  return (
    <>
      <Link to={location.state?.from ?? '/'} className={css.link}>
        Go back
      </Link>
      <div className={css.container}>
        <div className={css.filmInfo}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.title}
              width="250px"
            />
          </div>
          <div>
            <h1>{film.title}</h1>
            <p>User score: {Math.round(film.vote_average * 10)}%</p>
            <p className={css.text}>Overview</p>
            <p>{film.overview}</p>
            <p className={css.text}>Genres</p>
            <p>{film.genres?.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
        <div>
          <h2>Additional information</h2>
          <ul className={css.listOfAddInfo}>
            <li>
              <Link to="cast" className={css.addInfo}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" className={css.addInfo}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
