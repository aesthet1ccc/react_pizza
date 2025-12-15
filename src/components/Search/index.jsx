import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import React from "react";

import styles from "./Search.module.scss";
import clearIcon from "../../assets/clear.png";
import { setSearchValue } from "../../redux/slices/filterSlice";

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onClickClear = () => {
    dispatch(setSearchValue(value));
    setValue("");
    inputRef.current.focus();
  };
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
        placeholder="Поиск пиццы..."
      />
      {value && <img src={clearIcon} onClick={onClickClear} />}
    </div>
  );
}
export default Search;
