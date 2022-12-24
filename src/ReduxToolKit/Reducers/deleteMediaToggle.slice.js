import { createSlice } from "@reduxjs/toolkit";

export const deleteMediaToggleSlice = createSlice({
  name: "deleteMediaToggle",
  initialState: {
    deleteMediaToggle: false,
  },
  reducers: {
    setDeleteMediaToggle: (state, { payload }) => {
      state.deleteMediaToggle = payload;
    },
  },
});

export const { setDeleteMediaToggle } = deleteMediaToggleSlice.actions;
export default deleteMediaToggleSlice.reducer;
