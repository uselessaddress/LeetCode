//Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */ 

 function ListNode(val) {
    this.val = val
    this.next = null
 } 
 let mergeTwoLists = (l1,l2)=>{
    let ans = new ListNode(-1)
    let cur = ans
    while(l1&&l2&&l1.val!==undefined&&l2.val!==undefined){
        if(l1.val<l2.val){
            cur.next=cur=l1
            l1 = l1.next
        }else{
            cur.next=cur=l2
            l2 = l2.next
        }
    }
    
    if(l1&&l1.val!==undefined){
        cur.next = l1
    }
    if(l2&&l2.val!==undefined){
        cur.next = l2
    }
    return ans.next||[]
}
let a1 = new ListNode(1),
    a2 = new ListNode(3),
    a3 = new ListNode(5)
let b1 = new ListNode(2),
    b2 = new ListNode(4),
    b3 = new ListNode(6)
a1.next = a2
a2.next = a3
b1.next = b2
b2.next = b3
console.log(mergeTwoLists(
a1,b1
))