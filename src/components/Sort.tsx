import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort, SortPropertyValue } from "../redux/slices/filterSlice";
import { useClickOutside } from "../assets/onClickOutside";
import { RootState } from "../redux/store";

type Items = { name: string; sortProperty: SortPropertyValue };

export const itemsPopup: Items[] = [
  { name: "С высоким рейтингом", sortProperty: SortPropertyValue.RATING_DESC },
  { name: "С низким рейтингом", sortProperty: SortPropertyValue.RATING_ASC },
  { name: "Дороже", sortProperty: SortPropertyValue.PRICE_DESC },
  { name: "Дешевле", sortProperty: SortPropertyValue.PRICE_ASC },
  { name: "По алфавиту", sortProperty: SortPropertyValue.TITLE_ASC },
];

const Sort: React.FC = React.memo(() => {
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(sortRef, () => setOpen(false));

  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filter.sort);

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickActivePopup = (obj: Items) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка:</b>
        <span onClick={() => onClickOpen()}>{sort.name}</span>
      </div>
      <div>
        {open && (
          <div className="sort__popup">
            <ul>
              {itemsPopup.map((obj, index) => (
                <li
                  key={index}
                  className={
                    sort.sortProperty === obj.sortProperty ? "active" : ""
                  }
                  onClick={() => onClickActivePopup(obj)}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});
export default Sort;
