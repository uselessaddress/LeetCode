// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
var num1 = [1,1,2]
var num2 = [1,2]
let merge = (num1,m,num2,n)=>{
    let len = m+n
    m--,
    n--
    while(len--){
        if(n<0||num1[m]>num2[n]){
            num1[len] = num1[m--]
        }else{
            num1[len] = num2[n--]
        }
    }
}


merge(num1,3,num2,2)
console.log(num1)
