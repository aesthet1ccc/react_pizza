import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";

function Home() {
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const { searchValue } = React.useContext(SearchContext);

  const categoryId = useSelector((state) => state.filter.categoryId);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const sortBy = sortType.replace("-", "");
  const order = sortType.includes("-") ? "asc" : "desc";

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://68e7a39510e3f82fbf400c6d.mockapi.io/items?page=${currentPage}&limit=4&sortBy=${sortBy}&order=${order}&${category}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={onClickCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items
                .filter((obj) => {
                  if (
                    obj.title.toLowerCase().includes(searchValue.toLowerCase())
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
}
export default Home;
