 

// 66. Plus One
// DescriptionHintsSubmissionsDiscussSolution
// Discuss Pick One
// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

// You may assume the integer do not contain any leading zero, except the number 0 itself.

// The digits are stored such that the most significant digit is at the head of the list.

let plusOne = function(digits){
    // let tag=-1,len = digits.length
    // if(digits[len-1]!==9){
    //     digits[len-1] ++
    //     return digits
    // }
    
    // for(let i=len-2;i>=0;i--){
    //     if(digits[i]!==9){
    //         digits[i]++
    //         digits.fill(0,i+1,len)
    //         return digits;
    //     }
    // }
    // digits.unshift(1)
    // digits.fill(0,1)
    // return digits
    for(let i=digits.length-1;i>=0;i--){
        if(++digits[i]>9)
            digits[i] = 0
        else
            return digits
    }
    digits.unshift(1)
    return digits

}
console.log(plusOne([1,2,2,1,1]))
console.log(plusOne([9]))
console.log(plusOne([0]))
console.log(plusOne([1,3,9]))