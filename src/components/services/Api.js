import axios from "axios";

const API_KEY = "d03447fa3f598dd182491cdf76c53644";
const BASE_URL = "https://api.themoviedb.org/3";
const Authorization =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDM0NDdmYTNmNTk4ZGQxODI0OTFjZGY3NmM1MzY0NCIsIm5iZiI6MTcyMjc3MjcwMi40NDcxNzUsInN1YiI6IjY2MTUyMWY5MGJiMDc2MDE4NTMyNWZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qv18FTo3ZrRxmtFZmHrmpVJnZF2LzdJdHl1F47QvBgs";

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(`${BASE_URL}/trending/all/day`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}

export async function searchMovies(searchKeyword) {
  try {
    const response = await axios.get(`${BASE_URL / search / movie}`, {
      params: {
        api_key: API_KEY,
        query: searchKeyword,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

// export const fetchMovieDetails = async (movieId) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
//       params: {
//         api_key: API_KEY,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching movie details:", error);
//     return null;
//   }
// };

export async function fetchMovieDetails(movieId) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: {
      language: "en-US",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${Authorization}`,
    },
  };
  const { data } = await axios.request(options);

  return data;
}

export async function movieCredits(movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    response.data.cast;
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    throw error;
  }
}

export async function movieReviews(movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
}
