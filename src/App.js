import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import './App.css';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const MoviesView = lazy(() => import('./views/MoviesView/MoviesView'));
const MovieDetailsView = lazy(() =>
  import('./views/MovieDetailsView/MovieDetailsView'),
);

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h3>Loading...</h3>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
