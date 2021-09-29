import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moviesApi from '../../services/Api';
import s from './HomeView.module.css';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.fetchTrendMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <div className={s.container}>
      <h1>Trending today</h1>
      <ul className={s.movieList}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link className={s.movieLink} to={`/movies/${movie.id}`}>
                {movie.title}
                {movie.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
