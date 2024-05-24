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
    let currNode = queue.shift()    //while queue isn't empty, remove node 

    //checking if left and right nodes exist AND then compares node.val to target 
    if(currNode.left && currNode.left.val === target || currNode.right && currNode.right.val === target){
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

}

function inOrderPredecessor (rootNode, target, array = []) {

  if (!rootNode) return 
 
  inOrderPredecessor(rootNode.left, target, array)
  
  array.push(rootNode.val)
  inOrderPredecessor(rootNode.right, target, array)


  let index = array.indexOf(target)
  if (array[0] === target) return null
  return array[index-1]
}


    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7
//     bstRoot = new TreeNode(4);
//     bstRoot.left = new TreeNode(2);
//     bstRoot.left.left = new TreeNode(1);
//     bstRoot.left.right = new TreeNode(3);
//     bstRoot.right = new TreeNode(6);
//     bstRoot.right.left = new TreeNode(5);
//     bstRoot.right.right = new TreeNode(7);

// console.log(inOrderPredecessor(bstRoot, 4))



function deleteNodeBST(rootNode, target, array = []) {
  // Do a traversal to find the node. Keep track of the parent

  // if (!rootNode) return 
  // deleteNodeBST(rootNode.left, target, array)
  // array.push(rootNode.val)
  // deleteNodeBST(rootNode.right, target, array)


  // let index = array.indexOf(target)
  // if(index === -1) return undefined   // Undefined if the target cannot be found
  // if (array[0] === target) return null
  // let predecessor = array[index-1]
  //let successor = array[index+1]

  // Set target based on parent
  
    if (!rootNode) {
      return null;
    }

    if(target == rootNode.val) {
      if (!rootNode.left && !rootNode.right) {
        return null;
      }

      if (!rootNode.left) {
        return rootNode.right;
      }

      if (!rootNode.right) {
        return rootNode.left;
      }

      let temp = rootNode.right; //

      while(temp.left) {    //there was a ! in front of temp
        temp = temp.left;
      }

      rootNode.val = temp.val;

      rootNode.right = deleteNodeBST(rootNode.right, temp.val);  //

    } else if (target < rootNode.val) {
      rootNode.left = deleteNodeBST(rootNode.left, target);
      return rootNode;

    } else if (target > rootNode.val) {
      rootNode.right = deleteNodeBST(rootNode.right, target);
      return rootNode;
    } else return
  

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
