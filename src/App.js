import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from './Components/Loader/Loader';
import s from './app.module.css';
import { ToastContainer } from 'react-toastify';

const Navigation = lazy(() => import('./Components/Navigation'));
const HomeView = lazy(() => import('./views/HomeView'));
const NotFound = lazy(() => import('./views/404View'));
const MoviesView = lazy(() => import('./views/MoviesView'));
const MovieDetailView = lazy(() => import('./views/MovieDetailView'));

export default function App() {
  return (
    <div className={s.container}>
      <Suspense fallback={<Spinner />}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailView />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer />
    </div>
  );
}
