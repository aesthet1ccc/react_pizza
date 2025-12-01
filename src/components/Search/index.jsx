import { SearchContext } from "../../App";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";
import clearIcon from "../../assets/clear.png";
import React from "react";
function Search() {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        placeholder="Поиск..."
      />
      {value && <img src={clearIcon} onClick={onClickClear} />}
    </div>
  );
}
export default Search;
