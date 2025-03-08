import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice'
import cartReducer from "../features/cart/cartSlice"
import shopReducer from "../features/shop/ShopSlice"
import authReducer from "../features/user/UserSlice"
import { shopApi } from "../services/shopService";
import {authApi} from "../services/authService"
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    cart: cartReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware)
});

setupListeners(store.dispatch);

export default store;
