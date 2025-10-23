import { SearchContext } from "../../App";
import styles from "./Search.module.scss";
import clearIcon from "./clear.png";
import React from "react";
function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Поиск..."
      />
      {searchValue && (
        <img src={clearIcon} onClick={() => setSearchValue("")} />
      )}
    </div>
  );
}
export default Search;
