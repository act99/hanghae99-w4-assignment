// import { configureStore } from "@reduxjs/toolkit";
// import wordReducer from "./services/wordReducer";
// import dataReducer from "./services/getPostsReducer";
import { createStore, combineReducers } from "redux";
import words from "./services/ducks";

// export const store = configureStore({
//   reducer: {
//     wordReducer: wordReducer,
//     dataReducer: dataReducer,
//   },
// });

const rootReducer = combineReducers({ words });

const store = createStore(rootReducer);

export default store;
