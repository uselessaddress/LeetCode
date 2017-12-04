 

// 38. Count and Say
// DescriptionHintsSubmissionsDiscussSolution
// Discuss Pick One
// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

// Example 1:

// Input: 1
// Output: "1"
// Example 2:

// Input: 4
// Output: "1211"
function updateStr(str){
    // console.log(typeof str)
    let str_arr = str.split('')
    let ret = [],tag = str_arr[0], num=1
    for(let i=1;i<=str_arr.length;i++){
        if(str_arr[i]!==tag){
            ret.push(num)
            ret.push(parseInt(tag))
            tag = str_arr[i]
            num = 1
        }else{
            num++
        }
    }
    console.log(ret)
    return ret.join('')
}

let countAndSay  = (n)=>{
    let ans = '1'
    for(let i=0;i<n-1;i++){
        ans = updateStr(ans)
    }
    return ans
}
console.log(countAndSay(1))