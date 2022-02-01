import { createSlice } from "@reduxjs/toolkit";
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
      state.data = null;
      state.error = null;
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
    logoutUsuario(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const { fetchIniciado, fetchSucesso, fetchErro, logoutUsuario } =
  slice.actions;
export default slice.reducer;

export const fetchUsuario = (usuario, senha) => async (dispatch) => {
   
  
  
  try {
    dispatch(fetchIniciado());
    const { payload } = await dispatch(fetchToken(usuario, senha));
    if (payload.token) {
      const { url, options } = USER_TOKEN_AUTH(payload.token);
      const dadosUsuario = await fetch(url, options).then((resp) =>
        resp.json(),
      );
      return dispatch(fetchSucesso(dadosUsuario));
    } else {
      throw new Error(payload);
    }
  } catch (erro) {
    return dispatch(fetchErro(erro.message));
  }
};

export const loginAutomatico = () => async (dispatch, getState) => {
  try {
    const { token } = getState((state) => state);
    if (!token.data) throw new Error("");

    dispatch(fetchIniciado());
    const { url, options } = USER_TOKEN_AUTH(token.data);
    const resp = await fetch(url, options);

    if (!resp.ok) throw new Error();

    const dadosUsuario = await resp.json();
    return dispatch(fetchSucesso(dadosUsuario));
  } catch (e) {
    window.localStorage.removeItem("token");
    return dispatch(fetchErro(null));
  }
};

export const logout = () => async (dispatch, getState) => {
  dispatch(logoutUsuario());
  window.localStorage.removeItem("token");
};
