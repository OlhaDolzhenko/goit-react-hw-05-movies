import PropTypes from 'prop-types';
import defaultPhoto from '../../images/defaultPhoto.png';
import s from './MovieCast.module.css';

export default function MovieCast({ actors }) {
  return (
    <ul className={s.castList}>
      {actors.map(actor => {
        return (
          <li className={s.castItem} key={actor.id}>
            <img
              className={s.castImage}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultPhoto
              }
              alt={actor.name}
            />
            <p className={s.castName}>{actor.name}</p>
            <p className={s.castCharacter}>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
}

MovieCast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    }),
  ),
};
