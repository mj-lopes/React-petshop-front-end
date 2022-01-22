import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usuario from "./user";
import token from "./UserToken";

const reducer = combineReducers({ usuario, token });

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
