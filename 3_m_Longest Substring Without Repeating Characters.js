// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
    
// };

let lengthOfLongestSubstring = (str) => {
    let ret = 0,map = {},left=0
    for(let i=0;i<str.length;i++){
        left = map[str[i]] >= left ? map[str[i]]+1 : left
        map[str[i]] = i
        ret = Math.max(ret,i-left+1)
    }
    return ret
}

//注意undefined>= 0|1|..返回false
//undefined == 0|1|.. 返回false
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
