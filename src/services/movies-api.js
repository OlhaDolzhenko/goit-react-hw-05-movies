const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '220bff03221dfd89511422d29b226b64';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchMoviesTrending() {
  return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchMoviesSearch(query) {
  return fetchMovies(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
}

export function fetchMovieDetails(id) {
  return fetchMovies(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}

export function fetchMovieCredits(id) {
  return fetchMovies(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
}

export function fetchMovieReviews(id) {
  return fetchMovies(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
}
