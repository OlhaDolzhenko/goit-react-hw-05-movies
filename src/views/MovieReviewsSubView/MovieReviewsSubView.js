import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieReviews from '../../components/MovieReviews';
import NotFound from '../../components/NotFound';
import * as API from '../../services/movies-api';

export default function MovieReviewsSubView() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    API.fetchMovieReviews(movieId).then(data => {
      setReviews(data.results);
      setStatus('resolved');
    });
  }, [movieId]);

  return (
    <div>
      {status === 'resolved' && <MovieReviews reviews={reviews} />}
      {status === 'resolved' && reviews.length === 0 && (
        <NotFound text="No reviews" />
      )}
      <hr />
    </div>
  );
}
