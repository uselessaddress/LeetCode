// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.

// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.

//递归回溯法
let letterCombinations = function(digits,current="",res=[]){
    let str_table = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    if(digits.length === 0 && current === ''){
        return res
    }
    if(digits.length<1){
        return res.push(current)
    }
    let currentStr = str_table[digits[0]]
    for(let i=0;i<currentStr.length;i++){
        let currentLetter = currentStr[i]
        letterCombinations(digits.slice(1),current.concat(currentLetter),res)
    } 
    return res
}
console.log(letterCombinations("233"))