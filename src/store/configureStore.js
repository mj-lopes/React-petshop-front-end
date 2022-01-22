import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usuario from "./user";
import token from "./UserToken";
import localStorage from "./localStorage.middleware";

const reducer = combineReducers({ usuario, token });

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    localStorage,
  ],
});

export default store;
