import { createSlice } from "@reduxjs/toolkit";

export const userLogSlice = createSlice({
  name: "userLog",
  initialState: {
    userLog: "",
  },
  reducers: {
    setUserLog: (state, { payload }) => {
      state.userLog = payload;
    },
  },
});

export const { setUserLog } = userLogSlice.actions;
export default userLogSlice.reducer;
