import { createSlice } from "@reduxjs/toolkit";
import removeFromArray from "../helper/removeFromArray";

const slice = createSlice({
  name: "Carrinho",
  initialState: {
    listaProdutos: [],
  },
  reducers: {
    addAoCarrinho(state, action) {
      // Verifica se já existe o item no carrinho
      const quantidade = state.listaProdutos.filter(
        (i) => i.produto === action.payload,
      ).length;

      // Se existir, incrementa a quantidade, se não, add o registro
      if (quantidade) {
        state.listaProdutos.forEach((item, index, arr) => {
          if (item.produto === action.payload) {
            arr[index].quantidade += 1;
          }
        });
      } else {
        state.listaProdutos.push({
          produto: action.payload,
          quantidade: 1,
        });
      }
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
