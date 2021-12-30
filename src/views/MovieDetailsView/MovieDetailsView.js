import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import NotFound from '../../components/NotFound';
import Button from '../../components/Button';
import * as API from '../../services/movies-api';
import s from './MovieDetailsView.module.css';

const MovieCastSubView = lazy(() => import('../MovieCastSubView'));
const MovieReviewsSubView = lazy(() => import('../MovieReviewsSubView'));

export default function MovieDetailsView() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    API.fetchMovieDetails(movieId).then(data => {
      setMovie(data);
      setStatus('resolved');
    });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location.state.from);
  };

  return (
    <section>
      {status === 'resolved' && (
        <>
          <Button onReturn={onGoBack} />
          <MovieCard movieDetails={movie} />
        </>
      )}
      {status === 'resolved' && movie === null && (
        <NotFound text="Ups! Something went wrong. Try another movie." />
      )}
      <hr />
      <div>
        <h2 className={s.title}>Additional information</h2>
        <ul>
          <li>
            <NavLink
              to={`${url}/cast`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/reviews`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <Suspense fallback={<h3>Loading...</h3>}>
        <Route path={`${path}/cast`}>
          <MovieCastSubView />
        </Route>
        <Route path={`${path}/reviews`}>
          <MovieReviewsSubView />
        </Route>
      </Suspense>
    </section>
  );
}
