import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usuario from "./user";
import token from "./UserToken";
import carrinho from "./carrinho";
import localStorage from "./localStorage.middleware";

const reducer = combineReducers({ usuario, token, carrinho });

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    localStorage,
  ],
});

export default store;
