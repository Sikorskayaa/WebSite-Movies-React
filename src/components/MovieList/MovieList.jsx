import { NavLink } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width="300"
            className={css.img}
          />
          <NavLink
            state={{ from: location }}
            to={`/movies/${movie.id}`}
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ""}`
            }
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
