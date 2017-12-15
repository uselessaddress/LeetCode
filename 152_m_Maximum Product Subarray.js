 

// 152. Maximum Product Subarray
// DescriptionHintsSubmissionsDiscussSolution
// Discuss Pick One
// Find the contiguous subarray within an array (containing at least one number) which has the largest product.

// For example, given the array [2,3,-2,4],
// the contiguous subarray [2,3] has the largest product = 6.

let maxProduct = function(nums){
    let dp_max = [],dp_min = []
    dp_max[0]=nums[0]
    dp_min[0]=nums[0]
    for(let i=1;i<nums.length;i++){
        let max_local = dp_max[i-1]*nums[i]
        let min_local = dp_min[i-1]*nums[i]
        dp_max[i] = Math.max(Math.max(max_local,min_local),nums[i])
        dp_min[i] = Math.min(Math.min(max_local,min_local),nums[i])
    }
    return Math.max(...dp_max)
}
console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,-3,-2,-1,-2]))