import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Sort = {
  name: string;
  sortProperty: SortPropertyValue; /// Нужно пофиксить
};

export enum SortPropertyValue {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
  TITLE_ASC = "-title",
}

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "С высоким рейтингом",
    sortProperty: SortPropertyValue.RATING_DESC,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort; //// Проверить верность Sort
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectorSortProperty = (state: RootState) =>
  state.filter.sort.sortProperty;

export const {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
