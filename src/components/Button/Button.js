import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ onReturn }) {
  return (
    <button type="button" className={s.button} onClick={onReturn}>
      Back
    </button>
  );
}

Button.propTypes = {
  onReturn: PropTypes.func.isRequired,
};
