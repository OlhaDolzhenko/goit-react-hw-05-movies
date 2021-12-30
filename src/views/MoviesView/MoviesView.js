import { useState, useEffect } from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import Loader from 'react-loader-spinner';
import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MoviesList';
import NotFound from '../../components/NotFound';
import * as API from '../../services/movies-api';
import s from './MoviesView.module.css';

export default function MovieView() {
  const location = useLocation();
  const history = useHistory();
  const searchHistory = new URLSearchParams(location.search).get('searchBy');
  const [search, setSearch] = useState(searchHistory);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  const type = 'search';

  useEffect(() => {
    if (search === null) {
      return;
    }
    setStatus('pending');
    API.fetchMoviesSearch(search).then(data => {
      setMovies(data.results);
      setStatus('resolved');
    });
  }, [search]);

  const handleFormSubmit = search => {
    if (search) {
      setSearch(search);
      history.push({
        ...location,
        search: `searchBy=${search}`,
      });
      return;
    }
  };
  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {status === 'resolved' && <MovieList movies={movies} type={type} />}
      {status === 'pending' && (
        <div className={s.Loader}>
          <Loader type="BallTriangle" color="grey" height={100} width={100} />
        </div>
      )}
      {status === 'resolved' && search !== '' && movies.length === 0 && (
        <NotFound text="No results." />
      )}
    </>
  );
}
