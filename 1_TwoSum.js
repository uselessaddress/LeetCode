/*
    使用对象以及in运算符减小时间复杂度
*/

let sum = (nums,target)=>{
    let dist = {}
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i]
        if(diff in dist){
            return [dist[diff],i]
        }else{
            dist[nums[i]] = i
        }
    }
}

console.log(sum([2,7,10,11],9))