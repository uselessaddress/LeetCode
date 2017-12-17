// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example:

// Input: "babad"

// Output: "bab"

// Note: "aba" is also a valid answer.
// Example:

// Input: "cbbd"

// Output: "bb"

let longestPalindrome = (s)=>{
    // let left = 0,right = 0,max=0
    // for(let i=0;i<s.length;i++){
    //     for(let j=s.length;j>i;j--){
    //         let q = j,f = i
    //         while(s[f]===s[q] && f<=q){
    //             q--
    //             f++
    //         }
    //         if(f === q ||f > q){
    //             // console.log(f,q)
    //             let now_max =  Math.max(j-i+1,max)
    //             if(now_max>max){
    //                 left = i
    //                 right = j
    //                 max = now_max
    //             }
    //         }
    //     }
    // }
    // return s.split('').slice(left,right+1).join('')
    // ----暴力超时做法
}

console.log(longestPalindrome("babaasdfasdasdd"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome('s'))
// console.log(longestPalindrome('abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa'))

