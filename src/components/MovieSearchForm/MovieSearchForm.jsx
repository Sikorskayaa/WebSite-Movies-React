import { useState } from "react";
import css from "./MovieSearchForm.module.css";

const MovieSearchForm = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchKeyword);
  };

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <input
        type="text"
        onChange={handleChange}
        className={css.input}
        placeholder="Search Movie"
        name="searchInput"
      />
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};
export default MovieSearchForm;
