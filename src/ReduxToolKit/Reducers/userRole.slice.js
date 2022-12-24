import { createSlice } from "@reduxjs/toolkit";

export const userRoleSlice = createSlice({
  name: "userRole",
  initialState: {
    userRole: "",
  },
  reducers: {
    setUserRole: (state, { payload }) => {
      state.userRole = payload;
    },
  },
});

export const { setUserRole } = userRoleSlice.actions;
export default userRoleSlice.reducer;