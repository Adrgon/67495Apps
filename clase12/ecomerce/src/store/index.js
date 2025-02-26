import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice'
import shopReducer from "../features/shop/ShopSlice"
import cartReducer from "../features/cart/cartSlice"
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    cart: cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);

export default store;
