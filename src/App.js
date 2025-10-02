import "./scss/app.scss";
import Header from "./componentsJS/Header";
import Categories from "./componentsJS/Categories";

import Sort from "./componentsJS/Sort";
import PizzaBlock from "./componentsJS/PizzaBlock";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
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
              <PizzaBlock />
              <PizzaBlock />
              <PizzaBlock />
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
