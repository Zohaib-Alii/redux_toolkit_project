import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};
const modelSlice = createSlice({
  name: "ModelSlice",
  initialState,
  reducers: {
    modelOpen: (state) => {
      state.isOpen = true;
      console.log(state.isOpen);
    },
    closeModal: (state) => {
      state.isOpen = false;
      console.log(state.isOpen);
    },
  },
});
export const { modelOpen, closeModal } = modelSlice.actions;
export default modelSlice.reducer;
