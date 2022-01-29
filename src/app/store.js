// import { configureStore } from "@reduxjs/toolkit";
// import wordReducer from "./services/wordReducer";
// import dataReducer from "./services/getPostsReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import words from "./services/ducks";

// export const store = configureStore({
//   reducer: {
//     wordReducer: wordReducer,
//     dataReducer: dataReducer,
//   },
// });

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ words });

const store = createStore(rootReducer, enhancer);

export default store;
