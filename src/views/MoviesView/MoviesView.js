import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moviesApi from '../../services/Api';
import SearchBar from '../../Components/SearchBar/SearchBar';
import s from './MoviesView.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();

  const [movieName, setMovieName] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const movieQuery = new URLSearchParams(location.search).get('movie');
    setMovieName(movieQuery);
  }, [location.search]);

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    moviesApi
      .fetchSearchMovies(movieName)
      .then(searchResult => setSearchResult(searchResult));
  }, [movieName]);

  const handleSearchSubmit = searchQuery => {
    setMovieName(searchQuery);
    if (searchQuery.trim() === '') {
      toast.error('Input correct movie name');
      return;
    }
    reset();

    history.push({ ...location, search: `movie=${searchQuery}` });
  };

  const reset = () => {
    setSearchResult(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />

      <ul>
        {searchResult &&
          searchResult.map(result => (
            <li key={result.id}>
              <Link
                className={s.moviList}
                to={{
                  pathname: `/movies/${result.id}`,
                  state: { from: location },
                }}
              >
                {result.title}
                {result.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
