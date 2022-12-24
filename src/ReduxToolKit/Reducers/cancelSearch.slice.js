import { createSlice } from "@reduxjs/toolkit";

export const cancelSearchSlice = createSlice({
  name: "cancelSearch",
  initialState: {
    cancelSearch: false,
  },
  reducers: {
    setCancelSearch: (state, { payload }) => {
      state.cancelSearch = payload;
    },
  },
});

export const { setCancelSearch } = cancelSearchSlice.actions;
export default cancelSearchSlice.reducer;
