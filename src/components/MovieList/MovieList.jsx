import { NavLink } from "react-router-dom";

export default function MovieList({ movies, location }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink state={{ from: location }} to={`/movies/${movie.id}`}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
