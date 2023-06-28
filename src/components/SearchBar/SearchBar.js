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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleOnChange} />
      </form>
    </div>
  );
}

export default SearchBar;
