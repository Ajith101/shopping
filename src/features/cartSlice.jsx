import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemes: [],
  qty: [],
};
const cartSlice = createSlice({
  name: "cartManaging",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItemes.some((item) => item.id === action.payload.id)) {
        return state;
      }
      return void (state.cartItemes = [...state.cartItemes, action.payload]);
    },
    removeFromCart: (state, action) => {
      state.cartItemes = state.cartItemes.filter(
        (item) => item.id !== action.payload.id
      );
      state.qty = state.qty.filter((item) => item.id !== action.payload.id);
    },
    AddQty: (state, action) => {
      // console.log(action.payload.qty, action.payload.id);
      if (state.qty.some((itemes) => itemes.id === action.payload.id)) {
        return state;
      }
      return void (state.qty = [...state.qty, action.payload]);
    },
    increseQty: (state, action) => {
      // console.log("you pressed here", action.payload.id);
      state.qty = state.qty.map((itemes) =>
        itemes.id === action.payload.id
          ? { ...itemes, qty: itemes.qty + 1 }
          : itemes
      );
    },
    decreseQty: (state, action) => {
      state.qty = state.qty.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty === 1 ? 1 : item.qty - 1 }
          : item
      );
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, AddQty, increseQty, decreseQty } =
  cartSlice.actions;
