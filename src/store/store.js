import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("products", JSON.stringify(state.products));
});
