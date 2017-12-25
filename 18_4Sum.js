// Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note: The solution set must not contain duplicate quadruplets.

// For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]


let fourSum = (nums,target)=>{
    let len = nums.length,
    ans = [], 
    arr = nums.sort((a,b)=>a-b)
    if(len===4&&nums[0]+nums[1]+nums[2]+nums[3]===0){
        if(target===0){
            return [[0,0,0,0]]
        }else{
            return []
        }
    }
    for(let i=0;i<len;i++){
        if(i!==0&&arr[i]===arr[i-1])continue;
        for(let j=i+1;j<len;j++){
            if(j!==i+1&&arr[j]===arr[j-1])continue;
            let p = j+1,q = len-1
            while(p<q){
                let sum = arr[i]+arr[j]+arr[p]+arr[q]
                if(sum===target){
                    let cur = [arr[i],arr[j],arr[p],arr[q]]
                    ans.push(cur)
                    while(++p<q&&arr[p]===arr[p-1]){}
                    while(--q>p&&arr[q]===arr[q+1]){}
                }else if(sum<target){
                    ++p
                }else{
                    --q
                }
            }
        }
    }
    return ans
}

console.log(fourSum([1, 0, -1, 0, -2, 2],0))
console.log(fourSum([-1,0,1,2,-1,-4],-1))