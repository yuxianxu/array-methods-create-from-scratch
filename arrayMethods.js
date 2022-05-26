function forEachMethod(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i], i, array);
  }
}

module.exports = { forEachMethod };
