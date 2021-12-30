import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import PageHeading from '../../components/PageHeading';
import MovieList from '../../components/MoviesList';
import * as API from '../../services/movies-api';
import s from './HomeView.module.css';

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    API.fetchMoviesTrending().then(data => {
      setMovies(data.results);
      setStatus('resolved');
    });
  }, []);

  return (
    <section className={s.homeView}>
      <PageHeading text="Trending today" />
      {status === 'resolved' && <MovieList movies={movies} />}
      {status === 'pending' && (
        <div className={s.Loader}>
          <Loader type="BallTriangle" color="grey" height={100} width={100} />
        </div>
      )}
    </section>
  );
}
