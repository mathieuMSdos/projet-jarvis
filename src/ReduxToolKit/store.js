import { configureStore } from "@reduxjs/toolkit";
import userLogReducer from "../ReduxToolKit/Reducers/userLog.slice";
import searchPrivateHomeReducer from "../ReduxToolKit/Reducers/searchPrivateHome.slice";
import addMovieSearchReducer from "../ReduxToolKit/Reducers/addMovieSearch.slice";
import mediaWheelRandomReducer from "../ReduxToolKit/Reducers/mediaWheelRandom.slice";
import deleteMediaToggleReducer from "./Reducers/deleteMediaToggle.slice";
import cancelSearchReducer from "./Reducers/cancelSearch.slice";
import userRoleReducer from "./Reducers/userRole.slice";

export default configureStore({
  reducer: {
    userLog: userLogReducer,
    searchPrivateHome: searchPrivateHomeReducer,
    addMovieSearch: addMovieSearchReducer,
    mediaWheelRandom: mediaWheelRandomReducer,
    deleteMediaToggle: deleteMediaToggleReducer,
    cancelSearch: cancelSearchReducer,
    userRole: userRoleReducer,
  },
});
