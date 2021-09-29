import { useState } from 'react';

import s from './SearchBar.module.css';

export default function Searchbar({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  const handleChangeName = event => {
    setMovieName(event.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(movieName);
    setMovieName('');
  };
  return (
    <div>
      <header className={s.header}>
        <form className={s.Searchbar} onSubmit={handleSubmit}>
          <input
            className={s.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={movieName}
            onChange={handleChangeName}
          />
          <button className={s.searchBtn} type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    </div>
  );
}
