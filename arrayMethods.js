//forEach
function forEachMethod(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i], i, array);
  }
}

//map
function mapMethod(array, callBack) {
  const newArray = [];

  for (const element of array) {
    newArray.push(callBack(element));
  }

  return newArray;
}

//filter method
function filterMethod(array, callBack) {
  const newArray = [];
  for (const element of array) {
    if (callBack(element)) newArray.push(element);
  }
  return newArray;
}

//reduce method
function reduceMethod(array, callBack, initialVal) {
  let currentVal = initialVal;
  for (const element of array) {
    if (initialVal == null && element === array[0]) currentVal = array[0];
    else currentVal = callBack(currentVal, element);
  }
  return currentVal;
}

//some method
function someMethod(array, callBack) {
  for (const element of array) {
    if (callBack(element)) return true;
  }
  return false;
}

module.exports = { forEachMethod, mapMethod, filterMethod, reduceMethod, someMethod };
