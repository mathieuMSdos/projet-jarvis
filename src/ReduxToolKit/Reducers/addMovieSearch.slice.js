import { createSlice } from "@reduxjs/toolkit";

export const addMovieSearchSlice = createSlice({
  name: "addMovieSearch",
  initialState: {
    addMovieSearch: "empty",
  },
  reducers: {
    setAddMovieSearch: (state, { payload }) => {
      state.addMovieSearch = payload;
    },
  },
});

export const { setAddMovieSearch } = addMovieSearchSlice.actions;
export default addMovieSearchSlice.reducer;