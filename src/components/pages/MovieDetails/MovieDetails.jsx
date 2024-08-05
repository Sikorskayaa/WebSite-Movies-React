import { useEffect, useState, useRef } from "react";
import {
  useParams,
  Link,
  useLocation,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Loader from "../../Loader/Loader";
import Cast from "../../Cast/Cast";
import Reviews from "../../Reviews /Reviews ";
import { fetchMovieDetails } from "../../services/Api";

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
    : none;
  const userScore = Math.round(movieDetails.vote_average * 10);

  return (
    <div>
      <Link to={goBackBtn.current}>Go back</Link>
      <div>
        <img src={imageUrl} alt={movieDetails.title} />
        <div>
          <h2>{movieDetails.title}</h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
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
