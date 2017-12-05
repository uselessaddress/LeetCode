 

// 53. Maximum Subarray
// DescriptionHintsSubmissionsDiscussSolution
// Discuss Pick One
// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

// click to show more practice.

// More practice:
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
let maxSubArray = function(nums){
    // let max = Math.min(...nums),cur=0
    // if(nums.every((num)=>num<0)){
    //     return max = Math.max(...nums)
    // }
    // for(let i=0;i<nums.length;i++){
    //     if(cur+nums[i]<0){
    //         cur = 0
    //     }else{
    //         cur+=nums[i]
    //     }
    //     if(max<cur){
    //         max = cur
    //     }
    // }
    // return max
    let dp = [];
    dp[0] = nums[0]
    for(let i=1;i<nums.length;i++){
        dp[i]=nums[i]+(dp[i-1]<0?0:dp[i-1])
    }
    return Math.max(...dp)
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-1])) 