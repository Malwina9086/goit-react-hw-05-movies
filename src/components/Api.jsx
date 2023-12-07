import axios from 'axios';

const KEY = '7f4bd829091e57f20883be4180a933f3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
  return response.data.results;
};

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const getDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  return response.data;
};

export const getQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data.results;
};
