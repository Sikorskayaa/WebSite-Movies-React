import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} name="searchInput" />
      <button type="submit">Search</button>
    </form>
  );
};
export default MovieSearchForm;
