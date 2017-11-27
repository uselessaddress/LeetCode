/*
    罗马数字转整数
    如果当前数字大于后面的数字则加上当前数字
    如果当前数字小于后面的数字则减去当前数字
*/

let romanToInt = (s) =>{
    let roman = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let ans = 0
    for(let i=0;i<s.length-1;i++){
        if(roman[s[i]]>=roman[s[i+1]]){
            ans += roman[s[i]]
        }else{
            ans -= roman[s[i]]
        }
    }
    ans+=roman[s[s.length-1]]
    return ans
}

console.log(romanToInt('IV'))
console.log(romanToInt('I'))
console.log(romanToInt('DCXXI'))
