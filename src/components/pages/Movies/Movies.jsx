import { fetchMoviesApi } from "../../services/Api";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import MovieSearchForm from "../../MovieSearchForm/MovieSearchForm";
import MovieList from "../../MovieList/MovieList";
import css from "./Movies.module.css";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("movie");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;

      try {
        setIsLoading(true);
        const data = await fetchMoviesApi(query);
        setMovies(data);
        setSearched(true);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSearch = (searchKeyword) => {
    setSearchParams({ movie: searchKeyword });
  };

  return (
    <div>
      <h2 className={css.text}>Movies</h2>
      <MovieSearchForm onSearch={handleSearch} />
      {isLoading && <Loader />}
      {movies.length > 0 ? (
        <MovieList movies={movies} location={location} />
      ) : (
        searched && <NotFoundPage />
      )}
    </div>
  );
};
export default Movies;
