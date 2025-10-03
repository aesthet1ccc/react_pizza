import React from "react";

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const onClickActiveCategory = (index) => {
    setActiveCategory(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === 0 ? "active" : ""}
          onClick={() => onClickActiveCategory(0)}
        >
          Все
        </li>
        <li
          onClick={() => onClickActiveCategory(1)}
          className={activeCategory === 1 ? "active" : ""}
        >
          Мясные
        </li>
        <li
          onClick={() => onClickActiveCategory(2)}
          className={activeCategory === 2 ? "active" : ""}
        >
          Вегетарианская
        </li>
        <li
          onClick={() => onClickActiveCategory(3)}
          className={activeCategory === 3 ? "active" : ""}
        >
          Гриль
        </li>
        <li
          onClick={() => onClickActiveCategory(4)}
          className={activeCategory === 4 ? "active" : ""}
        >
          Острые
        </li>
        <li
          onClick={() => onClickActiveCategory(5)}
          className={activeCategory === 5 ? "active" : ""}
        >
          Закрытые
        </li>
      </ul>
    </div>
  );
}

export default Categories;
