import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const localCardData = () => {
  let newcart = localStorage.getItem("cart");

  if (newcart == "") {
    return [];
  } else {
    return JSON.parse(newcart);
  }
};
const localCardDataQty = () => {
  let newcart = localStorage.getItem("qty");
  if (newcart == []) {
    return [];
  } else {
    return JSON.parse(newcart);
  }
};

const initialState = {
  // cartItemes: localCardData(),
  cartItemes: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  // qty: localCardDataQty(),
  qty: localStorage.getItem("qty")
    ? JSON.parse(localStorage.getItem("qty"))
    : [],
  wishList: [],
};

// useEffect(() => {
//   localStorage.setItem("cart", JSON.stringify([initialState.cartItemes]));
// }, [initialState.cartItemes]);

const cartSlice = createSlice({
  name: "cartManaging",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItemes.some((item) => item.id === action.payload.id)) {
        return state;
      }
      return void ((state.cartItemes = [...state.cartItemes, action.payload]),
      localStorage.setItem("cart", JSON.stringify([...state.cartItemes])));
    },
    removeFromCart: (state, action) => {
      state.cartItemes = state.cartItemes.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify([...state.cartItemes]));
      state.qty = state.qty.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("qty", JSON.stringify([...state.qty]));
    },
    AddQty: (state, action) => {
      // console.log(action.payload.qty, action.payload.id);
      if (state.qty.some((itemes) => itemes.id === action.payload.id)) {
        return state;
      }
      return void ((state.qty = [...state.qty, action.payload]),
      localStorage.setItem("qty", JSON.stringify([...state.qty])));
    },
    increseQty: (state, action) => {
      // console.log("you pressed here", action.payload.id);
      state.qty = state.qty.map((itemes) =>
        itemes.id === action.payload.id
          ? { ...itemes, qty: itemes.qty + 1 }
          : itemes
      );
      localStorage.setItem("qty", JSON.stringify([...state.qty]));
    },
    decreseQty: (state, action) => {
      state.qty = state.qty.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty === 1 ? 1 : item.qty - 1 }
          : item
      );
      localStorage.setItem("qty", JSON.stringify([...state.qty]));
    },
    addWishList: (state, action) => {
      if (state.wishList.some((itemes) => itemes === action.payload)) {
        return state;
      }
      return void (state.wishList = [...state.wishList, action.payload]);
    },
    removeWishList: (state, action) => {
      state.wishList = state.wishList.filter((item) => item !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  AddQty,
  increseQty,
  decreseQty,
  addWishList,
  removeWishList,
} = cartSlice.actions;
