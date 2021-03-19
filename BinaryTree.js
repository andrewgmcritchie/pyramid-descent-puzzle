
/**
 * Creates a node to will be inserted into a binary tree.
 * This class has a special rightSibling property that helps
 * the biary tree track the order of the structure
 * @param {Number} value - The numberic value of the node
 */
class treeNode {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
    this.rightSibling = null;
  };

};
/**
 * A special binary tree that is expected to take a
 * pyramid like structure.  Each new level of the tree
 * holds 1 more node than the previous.  Each parent node has
 * two children nodes, and adjacent sibling nodes will share
 * a child node.
 */
module.exports = class BinaryTree {
  constructor () {
    this.root = null;
    this.current = null;
    this.leftMostSibling = null;
  }

 /**
 * Inserts a tree node into the data structure.  Searches recursively
 * from left to right to find the correct poistion, if the level
 * is full will start a new level starting at the leftmost child node
 * @param {Number} value - The numberic value of the node to be inserted
 */
  insert(value) {
    var newNode = new treeNode(value);

    // If empty tree
    if (!this.root) {
      this.root = newNode;
      this.current = this.root;
      this.leftMostSibling = this.root
      return newNode;
    }

    // Find the correct poistion
    var insertNode = (node) => {
      var leftTree = node.leftChild;
      var rightTree = node.rightChild;

      // Add right child to current node
      if (leftTree && !rightTree) {
        node.rightChild = newNode;
        node.leftChild.rightSibling = newNode;
        // Add child to sibling's left child
        if (node.rightSibling) {
          node.rightSibling.leftChild = newNode;
        }
        return;
      }

      // If current node has no children
      if (!leftTree) {
        node.leftChild = newNode
        return;
      }

      // Move to the next sibling
      if(this.hasChildren(node) && node.rightSibling) {
        this.current = node.rightSibling;
        insertNode(this.current)
      }

      // Move to the next level of the pyramid
      if(this.hasChildren(node) && !node.rightSibling) {
        this.current = this.leftMostSibling.leftChild;
        this.leftMostSibling = this.current;
        insertNode(this.current)
      }

    }

    insertNode(this.current);

  };

  hasChildren (tree) {
    return !!(tree.leftChild && tree.rightChild);
  }
};