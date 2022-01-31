// import { configureStore } from "@reduxjs/toolkit";
// import wordReducer from "./services/wordReducer";
// import dataReducer from "./services/getPostsReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import words from "./services/ducks";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";

// export const store = configureStore({
//   reducer: {
//     wordReducer: wordReducer,
//     dataReducer: dataReducer,
//   },
// });

const persistConfig = {
  key: "root",
  storage,
};

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ words });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer, enhancer);
export let persistor = persistStore(store);
