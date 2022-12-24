import { createSlice } from "@reduxjs/toolkit";

export const searchPrivateHomeSlice = createSlice({
  name: "searchPrivateHome",
  initialState: {
    searchPrivateHome: "empty",
  },
  reducers: {
    setSearchPrivateHome: (state, { payload }) => {
      state.searchPrivateHome = payload;
    },
  },
});

export const { setSearchPrivateHome } = searchPrivateHomeSlice.actions;
export default searchPrivateHomeSlice.reducer;