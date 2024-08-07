import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Movies = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const MovieDetails = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("./components/MovieCast/MovieCast"));
const Reviews = lazy(() => import("./components/MovieReviews/MovieReviews"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
