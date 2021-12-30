import PropTypes from 'prop-types';
import defaultImage from '../../images/defaultImage.png';
import s from './MovieCard.module.css';

export default function MovieCard({ movieDetails }) {
  return (
    <div className={s.movieBox}>
      <img
        className={s.image}
        src={
          movieDetails.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
            : defaultImage
        }
        alt={movieDetails.tagline}
      />

      <div className={s.descriptionBox}>
        <h2 className={s.title}>
          {movieDetails.title}{' '}
          {movieDetails.release_date ? `${movieDetails.release_date}` : ''}
        </h2>
        <p className={s.userScore}>
          User Score: {(movieDetails.vote_average * 100) / 10}%
        </p>
        <p className={s.overview}>Overview</p>
        <p className={s.overviewText}>{movieDetails.overview}</p>
        <p className={s.genres}>Genres</p>
        <p>
          {movieDetails.genres.map(({ name, id }) => (
            <span className={s.genresName} key={id}>
              {name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    backdrop_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
  }),
};
