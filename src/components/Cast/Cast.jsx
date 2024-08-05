// import { useEffect, useState } from "react";
// import { useParams, Outlet } from "react-router-dom";
// import { fetchCast } from "../services/Api";

// export const Cast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     const fetchMovieData = async () => {
//       try {
//         const castData = await fetchCast(movieId);
//         setCast(castData);
//       } catch (error) {
//         console.error("Error fetching movie credits:", error);
//       }
//     };

//     fetchMovieData();
//   }, [movieId]);

//   return (
//     <div>
//       <h3>Movie Cast</h3>
//       <ul>
//         {cast.map((actor) => (
//           <li key={actor.id}>
//             <img
//               src={
//                 actor.profile_path
//                   ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
//                   : "none"
//               }
//               alt={actor.name}
//               width="100"
//             />
//             <p>{actor.name}</p>
//             <p>Character: {actor.character}</p>
//           </li>
//         ))}
//       </ul>
//       <Outlet />
//     </div>
//   );
// };

// export default Cast;

import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { fetchCast } from "../services/Api";
// import none from "../../img/none.png";

export const Cast = () => {
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
    <div>
      <h3>Movie Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : "none"
              }
              alt={actor.name}
              width="100"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Cast;
