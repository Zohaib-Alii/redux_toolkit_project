import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (first) => {
    try {
      console.log(first);
      const { data } = await axios.get(url);
      debugger;
      console.log(data, "res json here get cart itemss func");
      return data;
    } catch (error) {
      return console.log(error, "get cart items error asdas");
    }
  }
);
// here we can define initial state
const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
  isRender: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    stateChange: (state) => {
      state.isRender = false;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      console.log(state.amount, action.payload);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.map((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action, "fulfild card item action");
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },

  // extraReducers: {
  //   [getCartItems.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     console.log(action, "fulfild action ");
  //     state.isLoading = false;
  //     state.cartItems = action.payload;
  //   },
  //   [getCartItems.rejected]: (state, action) => {
  //     console.log(action, "error");
  //     state.isLoading = false;
  //   },
  // },
});
console.log(cartSlice, "CartItems");
export const {
  stateChange,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
