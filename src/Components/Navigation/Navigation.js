import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function NavigationBar() {
  return (
    <header>
      <ul className={s.navList}>
        <li>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
