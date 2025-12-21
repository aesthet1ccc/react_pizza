import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import React from "react";

import styles from "./Search.module.scss";
import clearIcon from "../../assets/clear.png";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onClickClear = () => {
    dispatch(setSearchValue(value));
    setValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
};
export default Search;
