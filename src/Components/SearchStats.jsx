import { StyledSearchStats } from "./Styles/SearchStats.styled";

const SearchStats = ({ searchCode, searchDescription, searchResults }) => {
  return (
    <StyledSearchStats>
      <h3 className="search-results">
        Mostrando resultados de{" "}
        <span>
          "
          {searchCode ? searchCode : searchDescription ? searchDescription : ""}
          "
        </span>
      </h3>
      <h3 className="search-results">
        {searchResults ? `${searchResults} resultados` : `0 resultados`}
      </h3>
    </StyledSearchStats>
  );
};

export default SearchStats;
