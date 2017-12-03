 

// 35. Search Insert Position
// DescriptionHintsSubmissionsDiscussSolution
// Discuss Pick One
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 1:

// Input: [1,3,5,6], 0
// Output: 0

let searchInsert = (nums,target)=>{
    // if(nums.indexOf(target)!==-1){
    //     return nums.indexOf(target)
    // }else{
    //     nums.push(9999999999)
    //     for(let i=0;i<nums.length;i++){
    //         if(nums[i]>target){
    //             return i
    //         }
    //     }
    // }
    // ------
    // Binary Search
    let low = 0,high = nums.length
    while(low<high){
        let mid = parseInt((low+high)/2)
        if(nums[mid] === target){
            return mid
        }else if(nums[mid]>target){
            high = mid
        }else{
            low = mid+1
        }
    }   
    return low
}

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6],7))
console.log(searchInsert([1,3,5,6],0))