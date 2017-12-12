// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val){
    this.val = val
    this.left = this.right = null
}

let node1 = new TreeNode(1),
    node2 = new TreeNode(2),
    node3 = new TreeNode(3);

node1.left = node2
node1.right = node3

let node4 = new TreeNode(1),
    node5 = new TreeNode(2),
    node6 = new TreeNode(3);

node4.left = node5
node4.right = node6

let isSameTree = (p,q)=>{
    if(p === null || q === null) return p === q
    return (q.val === p.val)&&isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)

}

console.log(isSameTree(node1,node4))