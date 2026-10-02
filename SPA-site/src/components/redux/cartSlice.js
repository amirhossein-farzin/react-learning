import { createSlice } from "@reduxjs/toolkit";

const data = JSON.parse(localStorage.getItem("cartItems")) || null;
const initialState = {
  cartItems: data,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findItems = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (!findItems) {
        state.cartItems.push(action.payload);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
