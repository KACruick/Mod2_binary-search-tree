const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // check if rootNode.left has a left node ; recursion until flasey, gives min
  //if (!rootNode.left) return

  if (rootNode.left){
    return findMinBST(rootNode.left)
  }
  return rootNode.val
}

function findMaxBST (rootNode) {
  // check right
  if (rootNode.right){
    return findMaxBST(rootNode.right)
  }
  return rootNode.val
}

function findMinBT (rootNode) {
  let min = rootNode.val
  if (rootNode.left){
    min = Math.min(min, findMinBT(rootNode.left))
  }
  if (rootNode.right){
    min = Math.min(min, findMinBT(rootNode.right))
  }
  return min
}

function findMaxBT (rootNode) {
  let max = rootNode.val
  if(rootNode.left){
    max = Math.max(max, findMaxBT(rootNode.left))
  }
  if(rootNode.right){
    max = Math.max(max, findMaxBT(rootNode.right))
  }
  return max
}

function getHeight (rootNode) {
  if (!rootNode) return -1
  if (!rootNode.left && !rootNode.right) return 0
  
  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right))
  // add 1 to answer becuase rootNode not added
}

function balancedTree (rootNode) {
  if (!rootNode) return true 
  let leftHeight = getHeight(rootNode.left)
  let rightHeight = getHeight(rootNode.right)
  return (Math.abs(leftHeight - rightHeight) <= 1 && balancedTree(rootNode.left) && balancedTree(rootNode.right))
}

function countNodes (rootNode) {
  const queue = [rootNode]
  let counter = 0;

  while(queue.length){
    let currNode = queue.shift()
    counter++
    if (currNode.left) {
      queue.push(currNode.left)
    }
    if (currNode.right) {
      queue.push(currNode.right)
    }
  }
  return counter 
}

function getParentNode (rootNode, target) {
  
  if (rootNode.val === target) return null

  const queue = [rootNode]
  while(queue.length){
    let currNode = queue.shift()
    if(currNode.left === target){
      return currNode
    }
    if(currNode.right === target){
      return currNode
    }
    // if the node has a left node
    // push the left node on the back of the queue
    if (currNode.left) {
      queue.push(currNode.left)
    }
    // if the node has a right node
    // push the right node on the back of the queue
    if (currNode.right) {
      queue.push(currNode.right)
    }
  }
  return undefined
}

function inOrderPredecessor (rootNode, target) {
  // Your code here 
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
