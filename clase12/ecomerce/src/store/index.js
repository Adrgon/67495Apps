import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice'
import shopReducer from "../features/shop/ShopSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
  },
});

export default store;
