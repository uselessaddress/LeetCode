// 67. Add Binary
// DescriptionHintsSubmissionsDiscussSolution
// Discuss Pick One
// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".

let addBinary = function(a,b){
    let arr1 = a,arr2 = b
    let len1 = arr1.length-1,len2 = arr2.length-1 
    if(len1>=len2){
        let ans = ''
        let bit = 0
        while(len2>=0){
            let up = parseInt(arr1[len1])+parseInt(arr2[len2])+bit
            if(up === 0){
                bit = 0
                ans = '0'+ ans
            }else if(up === 1){
                bit = 0
                ans ='1'+ ans
            }else if(up === 2){
                bit = 1 
                ans = '0' + ans
            }else{
                bit = 1
                ans = '1' + ans
            }
            len1--
            len2--
        }
        while(len1>=0){
            let up = parseInt(arr1[len1])+bit
            if(up === 0){
                bit = 0
                ans = '0'+ans
            }else if(up === 1){
                bit = 0
                ans = '1' + ans
            }else if(up === 2){
                bit = 1
                ans = '0' + ans
            }
            len1--
        }
        if(bit === 1){
            ans = '1' + ans
        }
        return ans
    }else{
        return addBinary(b,a)
    }
}
console.log(addBinary('11','1'))
console.log(addBinary('1011','110'))
console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))
let ans = "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
if(ans === addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")){
    console.log(true)
}else{
    console.log(false)
}
console.log(addBinary('100001101','11110011'))

