import React from "react";

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickActiveCategory = (index) => {
    setActiveCategory(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={value}
            className={activeCategory === i ? "active" : ""}
            onClick={() => onClickActiveCategory(i)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
