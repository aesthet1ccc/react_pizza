import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/skeleton";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log(items);

  React.useEffect(() => {
    axios
      .get("https://68e7a39510e3f82fbf400c6d.mockapi.io/items")
      .then((res) => {
        setIsLoading(false);
        setItems(res.data);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
        </div>
      </div>
    </>
  );
}
export default Home;
