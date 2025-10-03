import "./scss/app.scss";
import Header from "./componentsJS/Header";
import Categories from "./componentsJS/Categories";
import React, { useState } from "react";
import Sort from "./componentsJS/Sort";
import PizzaBlock from "./componentsJS/PizzaBlock";

// const [count, setCount] = useState();
function App() {
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
              <PizzaBlock
                title="Пеперони"
                price={1000}
                imageUrl="./img/pizzas/1.jpg"
              />
              <PizzaBlock
                title="Сырная"
                price={500}
                imageUrl="./img/pizzas/2.jpg"
              />
              <PizzaBlock />
              <PizzaBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
