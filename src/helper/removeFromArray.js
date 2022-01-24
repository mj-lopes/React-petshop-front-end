function removeFromArray(arr, item) {
  const position = arr.indexOf(item);
  return arr.splice(position, 1);
}

export default removeFromArray;
