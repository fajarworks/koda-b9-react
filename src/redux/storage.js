import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./slices/surveyslice.js";

const store = configureStore({
  reducer: { survey: surveyReducer },
});

export default store;
