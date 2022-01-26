import { createSlice } from "@reduxjs/toolkit";
import { GET_PRODUCT_BY_UUID } from "../api/endPoints";
import removeFromArray from "../helper/removeFromArray";

const slice = createSlice({
  name: "Carrinho",
  initialState: {
    listaProdutos: [],
  },
  reducers: {
    addAoCarrinho(state, action) {
      state.listaProdutos = action.payload;
    },
    removeDoCarrinho(state, action) {
      // Busca pelo item
      state.listaProdutos.forEach((item, index, arr) => {
        if (item.produto === action.payload) {
          const quantidade = arr[index].quantidade;
          // Se a quantidade for igual a um, o item é excluído do array
          if (quantidade === 1) {
            state.listaProdutos = arr.filter((_, i) => i !== index);
          } else {
            // Do contrário, a sua quantidade é decressida em 1
            arr[index].quantidade -= 1;
          }
        }
      });
    },
  },
});

export const { addAoCarrinho, removeDoCarrinho } = slice.actions;

export const addProduto = (uuid) => async (dispatch, getState) => {
  const { carrinho } = getState((state) => state.carrinho);
  const lista = [...carrinho.listaProdutos];
  const quantidade = lista.filter((i) => i.uuid === uuid).length;

  if (quantidade) {
    const listaAlterada = lista.map((item, index, arr) => {
      if (item.uuid === uuid) {
        const quantidade = item.quantidade + 1;
        return {
          produto: item.produto,
          uuid: item.uuid,
          quantidade: quantidade,
        };
      } else {
        return item;
      }
    });
    dispatch(addAoCarrinho(listaAlterada));
  } else {
    try {
      const { url, options } = GET_PRODUCT_BY_UUID(uuid);
      const dado = await fetch(url, options).then((r) => r.json());
      dispatch(
        addAoCarrinho([
          ...lista,
          {
            produto: dado,
            uuid: uuid,
            quantidade: 1,
          },
        ]),
      );
    } catch {
      console.log("Ocorreu um erro ao fetch");
    }
  }
};
export default slice.reducer;
