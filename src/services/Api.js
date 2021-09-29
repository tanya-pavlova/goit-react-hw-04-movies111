import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'ccedf80b94e5f7dfe88940fbe0231014';

const fetchTrendMovies = async () => {
  return await axios
    .get(`trending/all/day?api_key=${KEY}`)
    .then(res => res.data.results);
};

const fetchSearchMovies = movieQuery => {
  return axios
    .get(
      `search/movie?api_key=${KEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`,
    )
    .then(r => r.data.results);
};

const fetcMovieInfo = movieId => {
  return axios
    .get(`movie/${movieId}?api_key=${KEY}&language=en-US`)
    .then(r => r.data);
};

const fetchMovieActors = movieId => {
  return axios
    .get(`movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
    .then(r => r.data);
};

const fetchMovieReviews = movieId => {
  return axios
    .get(`movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then(r => r.data);
};

export default {
  fetchTrendMovies,
  fetchSearchMovies,
  fetcMovieInfo,
  fetchMovieActors,
  fetchMovieReviews,
};
