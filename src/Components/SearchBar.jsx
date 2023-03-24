import { StyledSearchBar } from "./Styles/SearchBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useState } from "react";

const SearchBar = ({ handleOnSubmit, setSearchTerm }) => {
  const [inputFocused, setInputFocused] = useState(false);
  const handleFocus = () => {
    window.scrollTo({
      top: 300,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleOnFocus = () => {
    setInputFocused(true);
  };
  const handleOnBlur = () => {
    setInputFocused(false);
  };
  return (
    <StyledSearchBar
      inputFocused={inputFocused}
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <label className="search-icon" htmlFor="search">
        <FontAwesomeIcon icon={faSearch} />
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Buscar: jugo de tomate, harina..."
        onChange={(event) => setSearchTerm(event.target.value)}
        onClick={handleFocus}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <div className="btns-container">
        <Button text="Buscar" version="main" color="accent" />
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
