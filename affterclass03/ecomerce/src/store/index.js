import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice'
import shopReducer from "../features/shop/ShopSlice"
import globalReducer from "../features/glbal/globalSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    global: globalReducer
  },
});
