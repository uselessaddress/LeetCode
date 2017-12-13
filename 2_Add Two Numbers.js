// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
// **
// * Definition for singly-linked list.
// * function ListNode(val) {
// *     this.val = val;
// *     this.next = null;
// * }
// */
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/


function ListNode(val){
    this.val = val
    this.next = null
}
let node1 = new ListNode(1)

let node2 = new ListNode(9)
    node3 = new ListNode(9)

node2.next = node3

let node4 = new ListNode(5),
    node5 = new ListNode(5)


var addTwoNumbers = function(l1, l2) {
   let ansList = new ListNode(-1),
       curNode = ansList,
       up = 0
   
   while(l1&&l2){
       let cur = l1.val+l2.val+up
       if(cur>=10){
           up=1
           let curList = new ListNode(cur-10)
           curNode.next = curList
       }else{
           up=0
           let curList = new ListNode(cur)
           curNode.next = curList
       }
       l1 = l1.next
       l2 = l2.next
       curNode = curNode.next
   }
   if(up===1){
       while(l1){
           let cur = l1.val+up
           if(cur>=10){
               up=1
               let curList = new ListNode(cur-10)
               curNode.next = curList
           }else{
               up=0
               let curList = new ListNode(cur)
               curNode.next = curList
           }
            l1 = l1.next
            curNode = curNode.next
       }
       while(l2){
           let cur = l2.val+up
           if(cur>=10){
               up=1
               let curList = new ListNode(cur-10)
               curNode.next = curList
           }else{
               up=0
               let curList = new ListNode(cur)
               curNode.next = curList
           }
            l2 = l2.next
            curNode = curNode.next
       }
   }
   else{  
       if(l1===null){
           while(l2){
               curNode.next = l2
               curNode = curNode.next
               l2 = l2.next
           }
       }else{
           while(l1){
               curNode.next = l1
               curNode = curNode.next
               l1 = l1.next
           }
       }
   }
   if(up===1){
        if(!l1&&!l2){
            let curList = new ListNode(1)
            curNode.next = curList
            curNode = curNode.next
        }
   }
 
   
   return ansList.next
};

console.log(addTwoNumbers(node1,node2))
console.log(addTwoNumbers(node4,node5))