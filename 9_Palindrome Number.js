/*对半切，反转后面的数组然后对比*/
let isPalindrome = (num)=>{
    let arr = num.toString().split('')
    if(arr[0]==='-'){
        return false
    }
    if(arr.length == 1){
        return true
    }
    let arr_half_length = parseInt(arr.length/2)
  
    left_arr = []
    right_arr = []
    if(arr.length%2){
        left_arr = arr.slice(0,arr_half_length).join('')
        right_arr = arr.slice(arr_half_length+1,arr.length).reverse().join('')
      
    }else{
        left_arr = arr.slice(0,arr_half_length).join('')
        right_arr = arr.slice(arr_half_length,arr.length).reverse().join('')
      
    }
    
    if(left_arr===right_arr){
        return true
    }else{
        return false
    }
}

console.log(isPalindrome(-123))
console.log(isPalindrome(123))
console.log(isPalindrome(1))
console.log(isPalindrome(123321))
console.log(isPalindrome(222222))
console.log(isPalindrome(1001))
console.log(isPalindrome(121))