import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { fetchCast } from "../services/Api";
import css from "./MovieCast.module.css";
import none from "../../images/none.jpeg";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const castData = await fetchCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error("Error fetching movie credits:", error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  return (
    <div className={css.container}>
      <h3 className={css.title}>Movie Cast</h3>
      <ul className={css.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.item}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : none
              }
              alt={actor.name}
              width="200"
            />
            <p className={css.text}>{actor.name}</p>
            <p className={css.character}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieCast;
