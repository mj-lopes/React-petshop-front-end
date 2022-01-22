import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Contador",
  initialState: 0,
  reducers: {
    incrementar: (state) => state + 1,
    decrementar: (state) => state - 1,
  },
});

export const { incrementar, decrementar } = slice.actions;
export default slice.reducer;
