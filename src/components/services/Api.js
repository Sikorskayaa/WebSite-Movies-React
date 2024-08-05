import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const AccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDM0NDdmYTNmNTk4ZGQxODI0OTFjZGY3NmM1MzY0NCIsIm5iZiI6MTcyMjg2MzI4Ny4yMzY5NzMsInN1YiI6IjY2MTUyMWY5MGJiMDc2MDE4NTMyNWZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9VyfQMEPWAIXiMdAyGpg3jSTU7hpztAwYpoTVnutAds";

export const fetchTrendingMovies = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/trending/movie/day`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  };

  const { data } = await axios.request(options);
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/movie/${movieId}`,
    params: {
      language: "en-US",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  };
  const { data } = await axios.request(options);
  return data;
};

export const fetchCast = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        language: "en-US",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AccessToken}`,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    throw error;
  }
};

export const fetchReviews = async (movieId) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/movie/${movieId}/reviews`,
    params: {
      language: "en-US",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  };
  const { data } = await axios.request(options);
  return data;
};

export const fetchMoviesApi = async (searchKeyword) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/search/movie`,
    params: {
      language: "en-US",
      query: searchKeyword,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  };
  const { data } = await axios.request(options);
  return data.results;
};
