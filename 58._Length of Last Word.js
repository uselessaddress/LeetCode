 // 58. Length of Last Word
// DescriptionHintsSubmissionsDiscussSolution
// Discuss Pick One
// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

let lengthOfLastWord = (s)=>{
    // let str = s.trim()
    // if(str === ''){
    //     return 0
    // }else{
    //     return str.split(' ').reverse()[0].length
    // }
    return s.trim()===''?0:s.trim().split(' ').reverse()[0].length
}

console.log(lengthOfLastWord('hello world'))
console.log(lengthOfLastWord(' '))
console.log(lengthOfLastWord('a '))