const BinaryTree = require('./BinaryTree.js');

/**
 * A pyramid data structure that uses a binary tree class
 * that holds all the input numbers in order given on creation.
 * @param {Array} blocks - The numbers that make up the pyramid
 */
module.exports = class Pyramid extends BinaryTree {
  constructor(blocks) {
    super()
    this.build(blocks);
  }

  /**
 * Builds the pyramid with the given array from constructor
 * @param {Array} blocks - The numbers that make up the pyramid
 */
  build(blocks) {
    for (let i = 0; i < blocks.length; i++) {
      this.insert(blocks[i])
    }
  }

};