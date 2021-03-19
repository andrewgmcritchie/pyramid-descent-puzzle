const pyramidSolver = require('./pyramidSolver.js')

test('If solver finds correct path for a 5 level pyramid', () => {
  let blocks = [2,
                4, 3,
                3, 2, 6,
                2, 9, 5, 2,
                10, 5, 2, 15, 5];
  let target = 720;
  let expected = 'LRLL'
  expect(pyramidSolver(blocks, target)).toBe(expected);
});

test('If there is no correct path, returns a message to the user', () => {
  let blocks = [2,
                4, 3,
                3, 2, 6,
                2, 9, 5, 2,
                10, 5, 2, 15, 5];
  let target = 721;
  let expected = 'Sorry, no path can be found, try a different target or pyramid';
  expect(pyramidSolver(blocks, target)).toBe(expected);
});

test('Will not return a path if target is reached before the path finshes traversing the pyramid', () => {
  let blocks = [2,
                4, 3,
                3, 2, 6,
                2, 9, 5, 2,
                10, 5, 2, 15, 5];
  let target = 24;
  let expected = 'LL';
  expect(pyramidSolver(blocks, target)).not.toBe(expected);

})
