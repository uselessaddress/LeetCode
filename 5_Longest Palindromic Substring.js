// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example:

// Input: "babad"

// Output: "bab"

// Note: "aba" is also a valid answer.
// Example:

// Input: "cbbd"

// Output: "bb"

let longestPalindrome = (s) => {
    // ----暴力超时做法O(N^3)
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

    //----O(n^2)扩展做法(AC)，分奇偶进行扩展
    // let res_left = 0,res_right = 0, res_max = 1
    // for(let i=1;i<s.length;i++){
    //     let left = i-1,right = i+1,max = 1
    //     while(left>=0&&right<s.length){
    //         if(s[left]===s[right]){
    //             max+=2
    //             if(max>res_max){
    //                 res_max = max
    //                 res_left = left 
    //                 res_right = right 
    //             }
    //             left--
    //             right++
    //         }else{
    //             if(max>res_max){
    //                 res_max = max
    //                 res_left = left + 1
    //                 res_right = right - 1
    //             }
    //             break
    //         }
    //     }
    //     if(s[i]===s[i+1]){
    //         let odd_left = i,odd_right = i+1,max = 0
    //         while(odd_left>=0 && odd_right<s.length){
    //             if(s[odd_left]===s[odd_right]){
    //                 max+=2
    //                 if(max>res_max){
    //                     res_max = max
    //                     res_left = odd_left 
    //                     res_right = odd_right 
    //                 }
    //                 odd_left--
    //                 odd_right++
    //             }else{
    //                 if(max>res_max){
    //                     res_max = max
    //                     res_left = odd_left + 1
    //                     res_right = odd_right - 1
    //                 }
    //                 break
    //             }
    //         }
    //     }
    //     if(s[i]===s[i-1]){
    //         let odd_left = i-1,odd_right = i,max = 0
    //         while(odd_left>=0 && odd_right<s.length){
    //             if(s[odd_left]===s[odd_right]){
    //                 max+=2
    //                 if(max>res_max){
    //                     res_max = max
    //                     res_left = odd_left 
    //                     res_right = odd_right 
    //                 }
    //                 odd_left--
    //                 odd_right++
    //             }else{
    //                 if(max>res_max){
    //                     res_max = max
    //                     res_left = odd_left + 1
    //                     res_right = odd_right - 1
    //                 }
    //                 break
    //             }
    //         }
    //     }
    // }
    // return s.split('').slice(res_left,res_right+1).join('')

    //----继续优化为不分奇偶扩展,还是O(n^2)
    // let res_left = 0, res_right = 0, res_max = 0
    // for (let i = 0; i < s.length; i++) {
    //     let head = i, tail = i
    //     while (s[tail] === s[tail + 1]) {
    //         tail++
    //     }
    //     let max = tail - head + 1,
    //         left = head - 1, right = tail + 1
    //     while (left >= 0 && right < s.length) {
    //         if (s[left] === s[right]) {
    //             max += 2
    //             if (max > res_max) {
    //                 res_max = max
    //                 res_left = left
    //                 res_right = right
    //             }
    //             left--
    //             right++
    //         } else {
    //             break
    //         }

    //     }
    //     if (max > res_max) {
    //         res_max = max
    //         res_left = left + 1
    //         res_right = right - 1
    //     }
    // }
    // return s.split('').slice(res_left,res_right+1).join('')

    //----使用DP,二维数组-超时 O(N^2)
    // let res_left = 0,res_right = 0,res_max = 0,dp = []
    // for(let i=0;i<s.length;i++){
    //     dp[i] = []
    // }
    // for(let i=0;i<s.length;i++){
    //     for(let j=0;j<s.length;j++){
    //         dp[j][i] = (s[j] === s[i] && (i-j<2 || dp[j+1][i-1]))
    //         if(dp[j][i] && res_max < i-j+1){
    //             res_max = i-j+1
    //             res_left = j
    //             res_right = i
    //         }
    //     }
    //     dp[i][i] = 1
    // }
    // return s.split('').slice(res_left,res_right+1).join('')

    //----DP数组降维-超时 O(N^2)
    // let res_left = 0,res_right = 0,res_max = 0,dp = []
    // for(let i=0;i<s.length;i++){
    //     for(let j=0;j<s.length;j++){
    //         dp[j*s.length+i] = (s[j] === s[i] && (i-j<2 || dp[(j+1)*s.length+i-1]))
    //         if(dp[j*s.length+i] && res_max < i-j+1){
    //             res_max = i-j+1
    //             res_left = j
    //             res_right = i
    //         }
    //     }
    //     dp[i*s.length+i] = 1
    // }
    // return s.split('').slice(res_left,res_right+1).join('')

    //----终极解决方案，(Manacher's Algorithm)马拉车算法,O(n)
    let right_max = 0,mid = 0 ,res_center=0,res_max = 0,str = '$#',p=[]
    for(let i=0;i<s.length;i++){
        str += s[i]
        str += '#'
    } 
    // console.log(str)
    for(let i = 1;i<str.length;i++){
        p[i] = right_max > i ? Math.min(p[2*mid-i],right_max-i):1
        while(str[i+p[i]]===str[i-p[i]])
            ++p[i]
        if(right_max<i+p[i]){
            right_max = i+p[i]
            mid = i
        }
        if(res_max < p[i]){
            res_max = p[i]
            res_center = i
        }
    }
     return s.split('').splice((res_center - res_max)/2,res_max-1).join('')

}

console.log(longestPalindrome("babaasdfasdasdd"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome('aba'))
console.log(longestPalindrome('s'))
// console.log(longestPalindrome("abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa"))
// console.log(longestPalindrome("whdqcudjpisufnrtsyupwtnnbsvfptrcgvobbjglmpynebblpigaflpbezjvjgbmofejyjssdhbgghgrhzuplbeptpaecfdanhlylgusptlgobkqnulxvnwuzwauewcplnvcwowmbxxnhsdmgxtvbfgnuqdpxennqglgmspbagvmjcmzmbsuacxlqfxjggrwsnbblnnwisvmpwwhomyjylbtedzrptejjsaiqzprnadkjxeqfdpkddmbzokkegtypxaafodjdwirynzurzkjzrkufsokhcdkajwmqvhcbzcnysrbsfxhfvtodqabvbuosxtonbpmgoemcgkudandrioncjigbyizekiakmrfjvezuzddjxqyevyenuebfwugqelxwpirsoyixowcmtgosuggrkdciehktojageynqkazsqxraimeopcsjxcdtzhlbvtlvzytgblwkmbfwmggrkpioeofkrmfdgfwknrbaimhefpzckrzwdvddhdqujffwvtvfyjlimkljrsnnhudyejcrtrwvtsbkxaplchgbikscfcbhovlepdojmqybzhbiionyjxqsmquehkhzdiawfxunguhqhkxqdiiwsbuhosebxrpcstpklukjcsnnzpbylzaoyrmyjatuovmaqiwfdfwyhugbeehdzeozdrvcvghekusiahfxhlzclhbegdnvkzeoafodnqbtanfwixjzirnoaiqamjgkcapeopbzbgtxsjhqurbpbuduqjziznblrhxbydxsmtjdfeepntijqpkuwmqezkhnkwbvwgnkxmkyhlbfuwaslmjzlhocsgtoujabbexvxweigplmlewumcone"))
