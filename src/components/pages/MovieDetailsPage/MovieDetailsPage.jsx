import { useState, useEffect, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/Api";

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackButtonRef = useRef(location.state?.from ?? "/");

  const imgUrl = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetchMovieDetails(movieId);
      setMovieDetails(details);
    };

    fetchDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={goBackButtonRef.current}>Go back</Link>
      <div>
        <img
          src={`${imgUrl}/${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
        />
        <div>
          <h2>{movieDetails.title}</h2>
          <p>User Score: {Math.ceil(movieDetails.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
