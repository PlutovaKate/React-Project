import { createSlice } from "@reduxjs/toolkit";
import dataJson from "../../data.json";

const persisted = JSON.parse(localStorage.getItem("products"));
const initial = persisted || dataJson;

const productsSlice = createSlice({
  name: "products",
  initialState: initial,
  reducers: {
    addProduct: (state, { payload }) => {
      state.push(payload);
    },
    updateProduct: (state, { payload }) => {
      const idx = state.findIndex((p) => p.id === payload.id);
      if (idx !== -1) state[idx] = payload;
    },
    deleteProduct: (state, { payload: id }) => {
      const index = state.findIndex((p) => p.id === id);
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
