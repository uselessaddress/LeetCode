// Given a linked list, remove the nth node from the end of list and return its head.

// For example,

//    Given linked list: 1->2->3->4->5, and n = 2.

//    After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.
// Try to do this in one pass.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

let Node1 = new ListNode(1),
    Node2 = new ListNode(2),
    Node3 = new ListNode(3),
    Node4 = new ListNode(4),
    Node5 = new ListNode(5)

Node1.next = Node2
Node2.next = Node3
Node3.next = Node4
Node4.next = Node5

//有问题...
//  let removeNthFromEnd=(head,n)=>{
//     let arr = [] 
//     while(head!==null){
//         arr.push(head.val)
//         head = head.next
//     }
//     arr.splice(arr.length-n,1)
//     // console.log(arr)
//     function ListNode  (val){
//         this.val = val;
//         this.next = null;
//     }
//     ret = new ListNode(-1)
//     ans = ret
//     while(arr[0]!==undefined){
//         let NewNode = new ListNode(arr.shift())
//         // console.log(NewNode)
//         ans.next = NewNode
//         ans = ans.next
//     }
//     return ret.next
//  }

//快慢指针的方法
let removeNthFromEnd = (head,n)=>{
    let right= head,
        left = before = {next:head}
    while (n--) right = right.next;
    while(right){ //当右指针先走到头时，则左指针到了待删除元素前一个
        right = right.next
        left = left.next
    }
    left.next = left.next.next
    return before.next
}



console.log(removeNthFromEnd(Node1,2))