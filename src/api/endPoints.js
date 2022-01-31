const BASE_END_POINT = "https://react-petshop-back-end.herokuapp.com";

export function FETCH_USER_TOKEN(usuario, senha) {
  const basic64UsuarioSenha = btoa(usuario.concat(`:${senha}`));
  return {
    url: BASE_END_POINT + "/token",
    options: {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Basic " + basic64UsuarioSenha,
      },
    },
  };
}

export function USER_TOKEN_AUTH(token) {
  return {
    url: BASE_END_POINT + "/token/validate",
    options: {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function POST_NEW_USER(formData) {
  return {
    url: BASE_END_POINT + "/users",
    options: {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    },
  };
}

export function GET_PRODUCTS_FROM_CATEGORY(categoria) {
  return {
    url: BASE_END_POINT + "/products/" + categoria,
    options: {
      method: "GET",
    },
  };
}

export function GET_PRODUCT_DATA(uuid) {
  return {
    url: BASE_END_POINT + "/products/product/" + uuid,
    options: {
      method: "GET",
    },
  };
}

export function GET_PRODUCTS_FROM_SEARCH(query) {
  return {
    url: BASE_END_POINT + "/products/search/" + query,
    options: {
      method: "GET",
    },
  };
}

export function GET_PRODUCT_BY_UUID(uuid) {
  return {
    url: BASE_END_POINT + "/products/product/" + uuid,
    options: {
      method: "GET",
    },
  };
}

export function SAVE_NEW_PURCHASE(body) {
  const token = JSON.parse(window.localStorage.getItem("token"));
  return {
    url: BASE_END_POINT + "/purchase",
    options: {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_ALL_PURCHASES() {
  const token = JSON.parse(window.localStorage.getItem("token"));
  return {
    url: BASE_END_POINT + "/purchase",
    options: {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function GET_PURCHASE(idcompra) {
  const token = JSON.parse(window.localStorage.getItem("token"));
  return {
    url: BASE_END_POINT + "/purchase/" + idcompra,
    options: {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  };
}
