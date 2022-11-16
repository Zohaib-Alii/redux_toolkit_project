import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "checkk one ",
  test: "test obj",
};
const checking = createSlice({
  name: "checking",
  initialState,
  reducers: {
    test: (state) => {
      console.log(state.value);
    },
  },
});
export const { test } = checking.actions;
export default checking.reducer;
