import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

export default function MovieList({ movies, type }) {
  const location = useLocation();
  return (
    <ul className={type === 'search' ? s.list : s.listHome}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.item}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
              className={s.link}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
  type: PropTypes.string,
};
