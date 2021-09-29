import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import moviesApi from '../../services/Api';
import actorDefault from './actorDefault.png';
import s from './CastView.module.css';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);

  const { moviesId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieActors(moviesId).then(response => {
      if (response.cast.length === 0) {
        setError('We don`t have any cast for this movie.');
        return;
      }
      setActors(response.cast);
    });
  }, [moviesId]);

  return (
    <>
      <p>{error}</p>
      <ul className={s.castList}>
        {actors &&
          actors.map(actor => (
            <li className={s.actor} key={actor.cast_id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  className={s.actorImg}
                />
              ) : (
                <img
                  className={s.defaultImg}
                  src={actorDefault}
                  alt="Not found"
                />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
