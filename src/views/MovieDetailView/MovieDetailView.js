import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import moviesApi from '../../services/Api';
import Spinner from '../../Components/Loader/Loader';
import s from './MovieDetailView.module.css';

const Cast = lazy(() => import('../CastView/CastView.js'));
const Review = lazy(() => import('../Review/Review.js'));

export default function MovieDetailsView() {
  const history = useHistory();
  const location = useLocation();

  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetcMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  const onClickBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <div className={s.Container}>
      <div>
        <button
          className={s.arrowBack}
          onClick={onClickBack}
          aria-label="Go back"
        >
          <span>&#8592; Back</span>
        </button>

        <div>
          {movie && (
            <div className={s.detailsContainer}>
              <div className={s.posterContainer}>
                <img
                  className={s.poster}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className={s.movieInfo}>
                <h2 className={s.movieTitle}>{movie.title}</h2>
                <li className={s.listDescription}>
                  <p className={s.textBold}>
                    Release date:{' '}
                    <span className={s.text}>{movie.release_date}</span>
                  </p>
                </li>
                <p className={s.textBold}>
                  Rating: <span className={s.text}>{movie.vote_average}</span>
                </p>
                <p className={s.textBold}>
                  Overview: <span className={s.text}>{movie.overview}</span>
                </p>
                {movie.genres.length > 0 && (
                  <div className={s.genresContainer}>
                    <p className={s.textBoldGenres}>Genres:</p>
                    <ul className={s.genresList}>
                      {movie.genres.map(item => (
                        <li className={s.genresItem} key={item.id}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div>
          <div className={s.adInfo}>
            <p className={s.textBold}>Aditional information</p>
            <p>
              <Link
                to={{
                  pathname: `${url}/cast`,
                  state: {
                    from: location.state ? location.state.from : '/',
                  },
                }}
              >
                Cast
              </Link>
            </p>
            <p className="reviews-link">
              <Link
                to={{
                  pathname: `${url}/reviews`,
                  state: {
                    from: location.state ? location.state.from : '/',
                  },
                }}
              >
                Reviews
              </Link>
            </p>
          </div>
          <Suspense fallback={<Spinner />}>
            <Route path="/movies/:moviesId/cast">
              <Cast />
            </Route>

            <Route path="/movies/:moviesId/reviews">
              <Review />
            </Route>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
