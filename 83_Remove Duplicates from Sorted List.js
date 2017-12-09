
// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.


function ListNode(val){
    this.val = val
    this.next = null
}


let head_1 = new ListNode(1),
    node_1 = new ListNode(1)
    // node_2 = new ListNode(2)

head_1.next = node_1
// node_1.next = node_2


let head_2 = new ListNode(1),
    node_3 = new ListNode(1),
    node_4 = new ListNode(2),
    node_5 = new ListNode(3),
    node_6 = new ListNode(3);

head_2.next = node_3
node_3.next = node_4
node_4.next = node_5
node_5.next = node_6

let deleteDuplicates = (head)=>{
    if (head === null) return null;
    let ans = new ListNode(-1),
        dup = ans
        obj = {}
    while(head.next!==null){
        if(head.val in obj){
            head = head.next
        }else{
            obj[head.val] = head.val
            dup.next = dup = head
            head = head.next
            // dup = dup.next
        }

    }

    if(head.val in obj){
        dup.next = null
        return ans.next
    }else{
        obj[head.val] = head.val
        dup.next = head
    }
    return ans.next
}

console.log(deleteDuplicates(head_1))
// console.log(deleteDuplicates(head_2))
// console.log(deleteDuplicates())
