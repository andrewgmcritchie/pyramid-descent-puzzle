const Pyramid = require('./Pyramid.js');

  /**
 * Creates a new pyramid data structure using the given blocks(numbers),
 * and recursively traverses all possible paths of the data structure
 * until it finds a path whose products equal the given target value
 * @param {Array} blocks - The numbers that make up the pyramid
 * @param {Number} target - The target value that a path of products
 * must equal
 * @return {String} - The correct path that traverses the pyramid,
 * whose products equal the given target value
 */
function pyramidSolver(blocks, target) {
  // Create the pyramid structure
  var pyramid = new Pyramid(blocks);
  var pathFound = false
  var resultPath = '';

  var findPath = (block, product, path) => {
    if (product === target && !hasChild(block)) {
      resultPath = path;
      pathFound = true;
      return;
    }
    if(block.leftChild) {
      findPath(block.leftChild, product * block.leftChild.value, path + 'L')
    }

    if(block.rightChild) {
      findPath(block.rightChild, product * block.rightChild.value, path + 'R')
    }
  }

  findPath(pyramid.root, pyramid.root.value, '')

  if (pathFound) {
    return resultPath;
  } else {
    return 'Sorry, no path can be found, try a different target or pyramid';
  }
}

  /**
 * Checks if the given node has a right and left child node
 * @param {TreeNode} block - A node from a pyramid data structure
 * @return {Boolean} - True if the node contains a left and right
 * child node
 */
const hasChild = (block) => {
  return (block.leftChild || block.rightChild)
}

module.exports = pyramidSolver