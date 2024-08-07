import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./components/pages/Home/Home"));
const Movies = lazy(() => import("./components/pages/Movies/Movies"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const MovieDetails = lazy(() =>
  import("./components/pages/MovieDetails/MovieDetails")
);
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews /Reviews "));

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
