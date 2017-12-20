// Given an integer, convert it to a roman numeral.
// Input is guaranteed to be within the range from 1 to 3999.

// 罗马字符    I   V   X   L   C   D   M
// 整数数字    1   5   10  50  100 500 1000

let intToRoman = (num)=>{
    let th = ["","M","MM","MMM"],
        hun = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
        ten = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
        one = ["","I","II","III","IV","V","VI","VII","VIII","IX"],
        // trans = [one,ten,hun,th],
        // index = 0
        res = ''
    // while(num){
    //     res = trans[index++][num%10]+res
    //     num = parseInt(num/10)
    // }
    // return res
    return th[Math.floor(num/1000)] +hun[Math.floor((num%1000)/100)] + ten[Math.floor((num%100)/10)] +one[num%10];
}

console.log(intToRoman(5))
console.log(intToRoman(15))
console.log(intToRoman(155))
console.log(intToRoman(1555))