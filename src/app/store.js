import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./services/wordReducer";
export const store = configureStore({
  reducer: {
    wordReducer: wordReducer,
  },
});
