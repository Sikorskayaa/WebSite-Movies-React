import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/Api";
import MovieList from "../../MovieList/MovieList";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const movies = await fetchTrendingMovies();
        const filteredMovies = movies.filter(
          (movie) => movie.id && movie.title
        );
        setTrendingMovies(filteredMovies);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setTrendingMovies([]);
      }
    }
    fetchTrending();
  }, []);

  if (trendingMovies.length === 0) {
    return <p>No trending movies available.</p>;
  }

  return (
    <div>
      <h2>Trending Today</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
}
