// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.

//注意空间复杂度
let removeDuplicate = (nums)=>{
    // return [...new Set(nums)].length --- 不符合空间复杂度
    // return Array.from(new Set(nums).length) --- 不符合空间复杂度
    for(var j=0;j<nums.length;j++){
        if(nums[j]===nums[j+1]){
            nums.splice(j,1)
            console.log(nums.length)
            j--
        }
    }
    return j
}

console.log(removeDuplicate([1,2,2,2,2,3]))
// console.log(removeDuplicate([1,1,2]))