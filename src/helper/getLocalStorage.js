function getLocalStorage(key, inicial) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch {
    return inicial;
  }
}

export default getLocalStorage;
