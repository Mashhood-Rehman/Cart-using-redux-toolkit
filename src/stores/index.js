import { configureStore } from "@reduxjs/toolkit";
import productSlice from './product'; // Adjust the path if necessary
import cartSlice from "./cartSlice";
  const store = configureStore({
  reducer: {
    product: productSlice,
    cart : cartSlice
  },
});

export default store; // Make sure this is the default export
