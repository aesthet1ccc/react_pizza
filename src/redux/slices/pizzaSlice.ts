import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type FetchPizzasParameters = {
  currentPage: number;
  order: string;
  sortBy: string;
  category: string;
  search: string;
};

export type PizzaItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface PizzaSliceState {
  items: PizzaItem[];
  status: Status;
}

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params: FetchPizzasParameters) => {
    const { currentPage, order, sortBy, category } = params;
    const { data } = await axios.get<PizzaItem[]>(
      `https://68e7a39510e3f82fbf400c6d.mockapi.io/items?page=${currentPage}&limit=4&sortBy=${sortBy}&order=${order}&${category}`
    );

    return data as PizzaItem[];
  }
);

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state, action) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
