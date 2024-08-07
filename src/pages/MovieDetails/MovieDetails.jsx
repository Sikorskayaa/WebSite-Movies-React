import { useEffect, useState, useRef, lazy } from "react";
import {
  useParams,
  Link,
  useLocation,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { fetchMovieDetails } from "../../components/services/Api";
import css from "./MovieDetails.module.css";

const Reviews = lazy(() => import("../../components/Reviews /Reviews "));
const Cast = lazy(() => import("../../components/Cast/Cast"));
const Loader = lazy(() => import("../../components/Loader/Loader"));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const goBackBtn = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetchMovieDetails(movieId);
      setMovieDetails(details);
    };
    fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }

  const imageUrl = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    : "none";
  const userScore = Math.round(movieDetails.vote_average * 10);

  return (
    <div>
      <Link to={goBackBtn.current} className={css.btn}>
        Go back
      </Link>
      <div className={css.container}>
        <img src={imageUrl} alt={movieDetails.title} className={css.img} />
        <div className={css.wrapp}>
          <h2 className={css.title}>{movieDetails.title}</h2>
          <p className={css.text}>User Score: {userScore}%</p>
          <h3 className={css.title}>Overview</h3>
          <p className={css.text}>{movieDetails.overview}</p>
          <h3 className={css.title}>Genres</h3>
          <p className={css.text}>
            {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
      <ul className={css.list}>
        <li>
          <NavLink
            to="cast"
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ""}`
            }
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ""}`
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
};
export default MovieDetails;
