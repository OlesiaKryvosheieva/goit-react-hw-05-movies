import { getCastOfFilm } from 'components/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    getCastOfFilm(movieId)
      .then(response => response.json())
      .then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <>
      {cast.map(actor => (
        <div key={actor.id} className={css.actorInfo}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
            width="130px"
          />
          <p className={css.actorName}>{actor.name}</p>
          <p className={css.actorCharacter}>Character: {actor.character}</p>
        </div>
      ))}
    </>
  );
};

export default Cast;
