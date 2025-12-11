import React from "react";
import qs from "qs";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/skeleton";
import Pagination from "../components/Pagination";
import {
  selectorSortProperty,
  setCategoryId,
  setCurrentPage,
} from "../redux/slices/filterSlice";

import { SearchContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

function Home() {
  const sortType = useSelector(selectorSortProperty);
  // const { searchValue } = React.useContext(SearchContext);
  const { currentPage, categoryId, searchValue } = useSelector(
    (state) => state.filter
  );
  const { items, status } = useSelector((state) => state.pizza);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        currentPage,
      })
    );

    window.scroll(0, 0);
  };

  React.useEffect(() => {
    if (window.location.search) {
      getPizzas();
    }
  }, [categoryId, sortType, currentPage, searchValue]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortType,
      categoryId,
      currentPage,
    });

    navigate(`?${queryString}`);
  }, []);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock {...obj} key={obj.id} />);

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={onClickCategory} />
          <Sort />
        </div>
        {status === "error" ? (
          ""
        ) : (
          <h2 className="content__title">Все пиццы</h2>
        )}
        {status === "error" ? (
          <div className="content__error-info">
            <h2>Произошла ошибка 😕</h2>
            <p>
              К сожалению не удалось получить пиццы. Повторите попытку позже.
            </p>
          </div>
        ) : (
          <div className="content__items">
            {status === "loading" ? skeletons : pizzas}
          </div>
        )}
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
}
export default Home;
