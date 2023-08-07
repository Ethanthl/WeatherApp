import { combineReducers } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import historyReducer from "./historySlice";

const rootReducer = combineReducers({
  api: apiReducer,
  history: historyReducer
  // Add other reducers here if needed
});

export default rootReducer;
