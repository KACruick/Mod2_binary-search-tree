// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here 
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root = null;
    }
  
    insert(val, currentNode=this.root) {
      //if root is null, if tree is empty, set root to new node //also basecase 
      //if value is less than the currentNode 
          //check if currentNode has left pointer, if it doesnt then place newNode at left pointer
          //if it does, recursively call insert again passing the value and currentNode.left pointer
      //if greater 
          //check if currentNode has right pointer, if it doesnt then place newNode at right pointer
          //if it does, recursively call insert again passing the value and currentNode.right pointer
      
      if (!this.root){
        this.root = new TreeNode(val)
        return
      }
      if (val < currentNode.val){    //if value is less than the currentNode 
        if (!currentNode.left) {      //if no left pointer 
          currentNode.left = new TreeNode(val)
        } else {
          this.insert(val, currentNode.left)
        }
      } else {   //if greater 
          if (!currentNode.right) {   //if no right pointer 
            currentNode.right = new TreeNode(val)
          } else {
            this.insert(val, currentNode.right)
          }
      }
  
  
    }
  
    search(val) {
      // if root is null, return false because tree is empty
      // begin traversl loop
      //if value is lower than current node , go left 
      //if value is higher than current node , go right 
      //if both cases above fail, then that means the value has been found
      //If loops ends, value wasn't found, return false
      if (!this.root) return false
  
      let currentNode = this.root
      while (currentNode){
        if (val < currentNode.val) {
          currentNode = currentNode.left 
        } else if (val > currentNode.val){
          currentNode = currentNode.right
        } else {  //value is equal, so value is found 
          return true 
        }
      }
      return false 
    }
  
  
    preOrderTraversal(currentNode = this.root) {
     if (!currentNode) return 
     
     console.log(currentNode.val)
     this.preOrderTraversal(currentNode.left)
     this.preOrderTraversal(currentNode.right)
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      if (!currentNode) return 
  
      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      if (!currentNode) return 
      
      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
          // initialize a queue with the root node
          const queue = [this.root]    //shift to add to the front; pop to remove from end
  
      // while the queue is not empty
      // print and remove first node in queue
      while(queue.length){
        let currNode = queue.shift()
        console.log(currNode.val)
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
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
          // initialize a stack with the root node
      const stack = [this.root]    //push to end, pop to remove from end 
  
      // while the stack is not empty
      // print and remove first node in stack
      while(stack.length){
        let currNode = stack.pop()
        console.log(currNode.val)
      // if the node has a left node
      // push the left node on the back of the stack
        if(currNode.left){
          stack.push(currNode.left)
        }
        // if the node has a right node
        // push the right node on the back of the stack 
        if(currNode.right){
          stack.push(currNode.right)
        }
      }
    }
  }