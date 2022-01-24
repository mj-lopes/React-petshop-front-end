import { createSlice } from "@reduxjs/toolkit";
import removeFromArray from "../helper/removeFromArray";

const slice = createSlice({
  name: "Carrinho",
  initialState: {
    listaProdutos: [],
  },
  reducers: {
    addAoCarrinho(state, action) {
      const quantidade = state.listaProdutos.filter(
        (i) => i.produto === action.payload,
      ).length;
      state.listaProdutos.push({
        produto: action.payload,
        quantidade: quantidade + 1,
      });
    },
    removeDoCarrinho(state, action) {
      state.listaProdutos = removeFromArray(
        state.listaProdutos,
        action.payload,
      );
    },
  },
});

export const { addAoCarrinho, removeDoCarrinho } = slice.actions;
export default slice.reducer;
