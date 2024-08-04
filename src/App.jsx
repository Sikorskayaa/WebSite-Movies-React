import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/HomePage/HomePage";
import MoviesPage from "./components/pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./components/pages/MovieDetailsPage/MovieDetailsPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path="/movies/" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}
