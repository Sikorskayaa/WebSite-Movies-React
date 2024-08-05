import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Movies from "./components/pages/Movies/Movies";
import Layout from "./components/Layout/Layout";
import MovieDetails from "./components/pages/MovieDetails/MovieDetails";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews /Reviews ";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
