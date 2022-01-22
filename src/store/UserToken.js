import { createSlice } from "@reduxjs/toolkit";
import { FETCH_USER_TOKEN } from "../api/endPoints";

const slice = createSlice({
  name: "Token",
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

export const fetchToken = (usuario, senha) => async (dispatch) => {
  try {
    dispatch(fetchIniciado());

    const { url, options } = FETCH_USER_TOKEN(usuario, senha);
    const token = await fetch(url, options).then((resp) => resp.json());
    return dispatch(fetchSucesso(token));
  } catch (erro) {
    return dispatch(fetchErro(erro));
  }
};
