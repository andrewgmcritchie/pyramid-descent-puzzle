const Pyramid = require('./Pyramid.js')

test('If pyramid builds the correct structure', () => {
  let blocks = [2,
              4, 3,
             3, 2, 6,
            2, 9, 5, 2,
          10, 5, 2, 15, 5];
  const pyramid = new Pyramid(blocks);

  expect(pyramid.root.leftChild.rightChild.leftChild.leftChild.value).toBe(5);

  expect(pyramid.root.leftChild.rightChild.leftChild.rightChild.value).toBe(2);

  expect(pyramid.root.leftChild.leftChild.leftChild.leftChild.value).toBe(10);

  expect(pyramid.root.rightChild.rightChild.rightChild.rightChild.value).toBe(5);

});