import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { USER_TOKEN_AUTH } from "../api/endPoints";
import { fetchToken } from "./UserToken";

const slice = createSlice({
  name: "Usuario",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchIniciado(state) {
      state.loading = true;
    },
    fetchSucesso(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchErro(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchIniciado, fetchSucesso, fetchErro } = slice.actions;
export default slice.reducer;

export const fetchUsuario = (usuario, senha) => async (dispatch) => {
  try {
    dispatch(fetchIniciado());
    const { payload } = await dispatch(fetchToken(usuario, senha));
    const { url, options } = USER_TOKEN_AUTH(payload.token);
    const dadosUsuario = await fetch(url, options).then((resp) => resp.json());
    return dispatch(fetchSucesso(dadosUsuario));
  } catch (erro) {
    return dispatch(fetchErro(erro));
  }
};

export const loginAutomatico = () => async (dispatch, getState) => {
  try {
    dispatch(fetchIniciado());
    const { token } = getState((state) => state);
    const { url, options } = USER_TOKEN_AUTH(token.data);
    const dadosUsuario = await fetch(url, options).then((resp) => resp.json());

    return dispatch(fetchSucesso(dadosUsuario));
  } catch {}
};
