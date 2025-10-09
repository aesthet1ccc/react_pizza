import "./scss/app.scss";
import Header from "./componentsJS/Header";
import Categories from "./componentsJS/Categories";
import Sort from "./componentsJS/Sort";
import PizzaBlock from "./componentsJS/PizzaBlock";
import React from "react";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  console.log(items);

  React.useEffect(() => {
    axios
      .get("https://68e7a39510e3f82fbf400c6d.mockapi.io/items")
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items.map((obj) => (
                <PizzaBlock {...obj} key={obj.id} />
              ))}
              {/* <PizzaBlock
                title="Чизбургер-пицца"
                price={395}
                imageUrl="./img/pizzas/1.jpg"
              /> */}
              {/* <PizzaBlock
                title="Сырная"
                price={450}
                imageUrl="./img/pizzas/2.jpg"
              />
              <PizzaBlock
                title="Креветки-по-азиатски"
                price={290}
                imageUrl="./img/pizzas/3.jpg"
              />
              <PizzaBlock
                title="Сырный цыпленок"
                price={385}
                imageUrl="./img/pizzas/4.jpg"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
