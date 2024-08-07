import { NavLink } from "react-router-dom";
import css from "./MovieList.module.css";
import none from "../../images/none.jpeg";

const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                : none
            }
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
