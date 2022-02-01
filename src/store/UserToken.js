import { createSlice } from "@reduxjs/toolkit";
import { FETCH_USER_TOKEN } from "../api/endPoints";
import getLocalStorage from "../helper/getLocalStorage";

const slice = createSlice({
  name: "Token",
  initialState: {
    loading: false,
    data: getLocalStorage("token", null),
    error: null,
  },
  reducers: {
    fetchIniciado(state) {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    fetchSucesso: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare(payload) {
        return {
          payload,
          meta: { localStorage: { key: "token", value: payload.token } },
        };
      },
    },
    fetchErro(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    tokenReset(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const { fetchIniciado, fetchSucesso, fetchErro, tokenReset } =
  slice.actions;
export default slice.reducer;

export const fetchToken = (usuario, senha) => async (dispatch) => {
  try {
    dispatch(fetchIniciado());

    const { url, options } = FETCH_USER_TOKEN(usuario, senha);
    const resp = await fetch(url, options);

    if (!resp.ok) throw new Error("Usuário ou senha inválidos");

    const token = await resp.json();
    return dispatch(fetchSucesso(token));
  } catch (erro) {
    return dispatch(fetchErro(erro.message));
  }
};
