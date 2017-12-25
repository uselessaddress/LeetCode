// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

//     For example, given array S = {-1 2 1 -4}, and target = 1.

//     The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


let threeSumClosest = (nums,target)=>{
    let len = nums.length,
        arr = nums.sort((a,b)=>a-b),
        min = 9999999999,
        ret = 0
    for(let i=0;i<len;i++){
        let j=i+1,k=len-1
        while(j<k){
            let cur = arr[i]+arr[j]+arr[k],
                diff = Math.abs(target - cur)
                if(diff<min){
                    min = diff 
                    ret = cur
                }else if(cur<=target){
                    j++
                }else{
                    k--
                }
        }
    }
    return ret
}

console.log(threeSumClosest([-1,2,1,-4],1))