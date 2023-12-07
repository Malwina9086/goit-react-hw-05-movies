import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getTrending } from 'components/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const trendingMovies = await getTrending();
      setMovies(trendingMovies);
    })();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Home;
