// https://juejin.cn/post/6844904200644591623
// https://juejin.cn/post/6844903507988840456#heading-0
function BinarySearchTree() {
  let Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  let root = null;

  // 插入
  this.insert = function (key) {
    let newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  function insertNode(node, newNode) {
    // 如果新节点值小于当前节点值，则插入左子节点
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      // 如果新节点值大于当前节点值，则插入右子节点
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }
  this.getroot = ()=>{
    return root;
  }
}

let tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
console.log(tree.getroot());
