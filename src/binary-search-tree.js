const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.rootOfOrigin = null
  }

  root() {
    return this.rootOfOrigin;
  }

  add(data) {
    this.rootOfOrigin = addWithin(this.rootOfOrigin, data)

    function addWithin(node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        node.left = addWithin(node.left, data)
      }else{
        node.right = addWithin(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    return searchIn(this.rootOfOrigin, data)

    function searchIn(node, data){
      if(!node){
        return false;
      }

      if (node.data === data){
        return true;
      }

      return data < node.data ? searchIn(node.left, data) : searchIn(node.right, data);
    }
  }

  find(data) {
    return searchIn(this.rootOfOrigin, data)

    function searchIn(node, data){
      if(!node){
        return null;
      }

      if (node.data === data){
        return node;
      }

      return data < node.data ? searchIn(node.left, data) : searchIn(node.right, data);
    }
    
  }

  remove(data) {
    this.rootOfOrigin = deleteNode(this.rootOfOrigin, data)

    function deleteNode(node, data){
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = deleteNode(node.left, data);
        return node
      }else if(data > node.data){
        node.right = deleteNode(node.right, data);
        return node
      }else{
        if(!node.left && !node.right){
          return null;
        }

        if (!node.left){
          node = node.right;
          return node;
        }

        if( !node.right){
          node = node.left;
          return node;
        }

        let maxL = node.left;
        while (maxL.right) {
          maxL = maxL.right
        }

        node.data = maxL.data;
        node.left = deleteNode(node.left, maxL.data);
        return node;
      }
    }
  }

  min() {
    if(!this.rootOfOrigin){
      return null;
    }
    
    let node = this.rootOfOrigin;
    while (node.left) {
      node = node.left;
    }

    return node.data
  }
  

  max() {
    if(!this.rootOfOrigin){
      return null; 
    }

    let node = this.rootOfOrigin;
    while (node.right) {
      node = node.right;
    }

    return node.data
  }

  

}



module.exports = {
  BinarySearchTree
};