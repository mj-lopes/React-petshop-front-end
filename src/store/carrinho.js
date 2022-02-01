import { createSlice } from "@reduxjs/toolkit";
import { GET_PRODUCT_BY_UUID } from "../api/endPoints";

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
      state.listaProdutos = action.payload;
    },
    limparCarrinho(state) {
      state.listaProdutos = [];
    },
  },
});

export const { addAoCarrinho, removeDoCarrinho, limparCarrinho } =
  slice.actions;

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
    } catch (error) {
      console.log(error);
    }
  }
};

export const removerProduto = (uuid) => async (dispatch, getState) => {
  const { carrinho } = getState((state) => state.carrinho);
  const lista = [...carrinho.listaProdutos];

  const listaAlterada = lista
    .map((item) => {
      if (item.uuid === uuid) {
        const quantidade = item.quantidade;

        if (quantidade === 1) {
          return null;
        } else {
          return {
            produto: item.produto,
            uuid: item.uuid,
            quantidade: quantidade - 1,
          };
        }
      }
      return item;
    })
    .filter((i) => i);

  dispatch(removeDoCarrinho(listaAlterada));
};
export default slice.reducer;
