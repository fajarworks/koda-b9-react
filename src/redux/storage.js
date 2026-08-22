import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./slices/surveyslice.js";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import storage from 'redux-persist/es/storage'
import todoReducer from "./slices/todoSlice.js"
// import {  } from '@reduxjs/toolkit';


const persistTodoConfig = {
  key: 'todo',
  storage
}

const persistTodoReducer = persistReducer(
  persistTodoConfig,todoReducer
)

const store = configureStore({
  reducer: {
    survey: surveyReducer,
    todo: persistTodoReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({serializableCheck: {ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})

});

export const persistor = persistStore(store)
export default store;
