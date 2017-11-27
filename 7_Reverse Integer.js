/* 
32位有符号整数的范围
16位整数中-32768到32767
32位整数中-2147483648到2147 483 647
最高位为符号位 ，计算2的15次方以及2的31次方，就可以得到以上结果
16位整数-2^15~2^15-1
32位整数-2^31~2^31-1
---
数字转字符串：toString
字符串转整形数：parseInt
字符串转数组：split
数组转字符串：join
数组反转：reverse
数组弹出最后的数：pop
数组弹出最前面的数：shift
数组插入最后一个数：push
数组插入第一个数：unshift
*/

let reverse = (num)=>{
    if(num===0){
        return 0
    }
    let arr = num.toString().split('').reverse()
    if(arr[arr.length-1]==='-'){
        arr.pop()
        arr.unshift('-')
    }
    let zero_num = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='0'){
            zero_num++
        }else{
            break
        }
    }
    for(let i=0;i<zero_num;i++){
        arr.shift()
    }
    let ans = parseInt(arr.join(''))
    if(ans >= 2147483647){
        return 0;
    }else if(ans<=-2147483648){
        return 0
    }else{
        return ans
    }
    
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(12000))
console.log(reverse(0))
console.log(reverse(1534236469))