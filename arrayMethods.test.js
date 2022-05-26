// const forEachMethod = (a, ...args) => a.forEach(...args);

const { forEachMethod } = require('./arrayMethods.js');

const startingArray = ['a', 'b', 'c', 'd'];

it('forEachMethod', () => {
  const testFunction = jest.fn();

  forEachMethod(startingArray, testFunction);

  expect(testFunction).toHaveBeenNthCalledWith(1, 'a', 0, startingArray);
  expect(testFunction).toHaveBeenNthCalledWith(2, 'b', 1, startingArray);
  expect(testFunction).toHaveBeenNthCalledWith(3, 'c', 2, startingArray);
  expect(testFunction).toHaveBeenCalledTimes(4);
});
