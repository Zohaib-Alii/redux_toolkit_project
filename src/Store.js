import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart/CartSlice";
import modelSlice from "./feature/model/modelSlice";
import checkingSlice from "./feature/testSlice/slice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modelToggle: modelSlice,
    testingPurpose: checkingSlice,
  },
});
