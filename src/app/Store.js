import { configureStore } from "@reduxjs/toolkit";
import shopCartReducer from "../features/shopCart/ShopCartSlice";
import ProductsReducer from "../features/products/ProductSlice";

export default configureStore({
  reducer: {
    shopCart: shopCartReducer,
    products: ProductsReducer,
  },
});
