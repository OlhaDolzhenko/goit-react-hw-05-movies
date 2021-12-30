import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCast from '../../components/MovieCast';
import NotFound from '../../components/NotFound';
import * as API from '../../services/movies-api';

export default function MovieCastSubView() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    API.fetchMovieCredits(movieId).then(data => {
      setCast(data.cast);
      setStatus('resolved');
    });
  }, [movieId]);

  return (
    <div>
      {status === 'resolved' && <MovieCast actors={cast} />}
      {status === 'resolved' && cast.length === 0 && (
        <NotFound text="No information" />
      )}
      <hr />
    </div>
  );
}
