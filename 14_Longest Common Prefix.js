// Write a function to find the longest common prefix string amongst an array of strings.
let longestCommonPrefix = (strs)=>{
    if(strs[0]===undefined){
        return ''
    }
   let ans = []
   for(let i=0;i<strs[0].length;i++){
       let _char = strs[0][i]
       let tag = true
        for(let j=0;j<strs.length;j++){
            if(_char !== strs[j][i]){
                tag = false
            }
        }
        if(tag){
            ans.push(_char)
        }else{
            break
        }
   }
   return ans.join('')
}

console.log(longestCommonPrefix(['123','12']))
console.log(longestCommonPrefix([]))
console.log(longestCommonPrefix(['123123']))
console.log(longestCommonPrefix(['123123','12']))

