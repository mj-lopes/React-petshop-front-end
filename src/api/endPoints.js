const BASE_END_POINT = "http://localhost:9090";

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
    url: BASE_END_POINT + "/product/" + uuid,
    options: {
      method: "GET",
    },
  };
}
