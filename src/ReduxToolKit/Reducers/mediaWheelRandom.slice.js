import { createSlice } from "@reduxjs/toolkit";

export const mediaWheelRandom = createSlice({
  name: "mediaWheelRandom",
  initialState: {
    mediaWheelRandom: "",
  },
  reducers: {
    setmediaWheelRandom: (state, { payload }) => {
      state.mediaWheelRandom = payload;
    },
  },
});

export const { setmediaWheelRandom } = mediaWheelRandom.actions;
export default mediaWheelRandom.reducer;