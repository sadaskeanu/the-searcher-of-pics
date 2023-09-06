import './SearchBar.css'
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className='search-bar'>
      <form className='form' onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input value={term} onChange={handleOnChange} />
        <button className='button' type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
