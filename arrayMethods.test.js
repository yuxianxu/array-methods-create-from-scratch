//import function
const {
  forEachMethod,
  mapMethod,
  filterMethod,
  reduceMethod,
  someMethod,
} = require('./arrayMethods.js');

//initialize test array
const startingArray = ['a', 'b', 'c', 'd'];

//test forEach method
it('forEachMethod', () => {
  //initialize test function
  const testFunction = jest.fn();

  //execute test function
  forEachMethod(startingArray, testFunction);

  //check call elements and call times
  expect(testFunction).toHaveBeenNthCalledWith(1, 'a', 0, startingArray);
  expect(testFunction).toHaveBeenNthCalledWith(2, 'b', 1, startingArray);
  expect(testFunction).toHaveBeenNthCalledWith(3, 'c', 2, startingArray);
  expect(testFunction).toHaveBeenNthCalledWith(4, 'd', 3, startingArray);
  expect(testFunction).toHaveBeenCalledTimes(4);
});

//test map method
it('mapMethod', () => {
  const testFunction = jest.fn((elem) => elem + ' OK');

  const currentArray = mapMethod(startingArray, testFunction);

  //check result
  expect(currentArray).toEqual(['a OK', 'b OK', 'c OK', 'd OK']);

  //check call elements and call times
  expect(testFunction).toHaveBeenNthCalledWith(1, 'a');
  expect(testFunction).toHaveBeenNthCalledWith(2, 'b');
  expect(testFunction).toHaveBeenNthCalledWith(3, 'c');
  expect(testFunction).toHaveBeenNthCalledWith(4, 'd');
  expect(testFunction).toHaveBeenCalledTimes(4);
});

//test filter method
it('filterMethod', () => {
  const testFunction = jest.fn((elem) => elem === 'a' || elem === 'd');

  const currentArray = filterMethod(startingArray, testFunction);

  expect(currentArray).toEqual(['a', 'd']);

  expect(testFunction).toHaveBeenNthCalledWith(1, 'a');
  expect(testFunction).toHaveBeenNthCalledWith(2, 'b');
  expect(testFunction).toHaveBeenNthCalledWith(3, 'c');
  expect(testFunction).toHaveBeenNthCalledWith(4, 'd');
  expect(testFunction).toHaveBeenCalledTimes(4);
});

//test reduce method
describe('reduceMethod', () => {
  const reduceStartingArray = [-3, 4, 5, 6];

  it('Sum - without initial value', () => {
    const testFunction = jest.fn((pre, curr) => pre + curr);

    const result = reduceMethod(reduceStartingArray, testFunction);

    expect(result).toEqual(12);
    expect(testFunction).toHaveBeenNthCalledWith(1, -3, 4);
    expect(testFunction).toHaveBeenCalledTimes(3);
  });

  it('Sum - with a initial value', () => {
    const testFunction = jest.fn((pre, curr) => pre + curr);

    const result = reduceMethod(reduceStartingArray, testFunction, 5);

    expect(result).toEqual(17);
    expect(testFunction).toHaveBeenNthCalledWith(2, 2, 4);
    expect(testFunction).toHaveBeenCalledTimes(4);
  });
});

//test some method
describe('someMethod', () => {
  it('with a truthy value', () => {
    const someStartingArray = [-3, 4, 5, 6];
    const testFunction = jest.fn((elem) => elem > 0);
    const result = someMethod(someStartingArray, testFunction);
    expect(result).toEqual(true);
  });

  it('with a falsy value', () => {
    const someStartingArray = [-2, -5, -9];
    const testFunction = jest.fn((elem) => elem > 0);
    const result = someMethod(someStartingArray, testFunction);
    expect(result).toEqual(false);
  });
});
