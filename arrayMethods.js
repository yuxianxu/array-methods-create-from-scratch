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

//every method
function everyMethod(array, callBack) {
  for (const element of array) {
    if (!callBack(element)) return false;
  }
  return true;
}

//flat method
function flatMethod(array, depth = 2) {
  const newArray = [];
  for (const element of array) {
    if (Array.isArray(element) && depth > 0) {
      newArray.push(...flatMethod(element, depth - 1));
    } else {
      newArray.push(element);
    }
  }
  return newArray;
}

module.exports = {
  forEachMethod,
  mapMethod,
  filterMethod,
  reduceMethod,
  someMethod,
  everyMethod,
  flatMethod
};
