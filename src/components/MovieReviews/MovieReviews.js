import PropTypes from 'prop-types';
import s from './MovieReviews.module.css';

export default function MovieReviews({ reviews }) {
  return (
    <ul className={s.reviewsList}>
      {reviews.map(review => {
        return (
          <li className={s.reviewItem} key={review.id}>
            <p className={s.reviewAuthor}>Author: {review.author}</p>
            <p className={s.reviewContent}>"{review.content}"</p>
          </li>
        );
      })}
    </ul>
  );
}

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};
