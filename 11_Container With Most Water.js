
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.


//用两个指针从两端开始向中间靠拢，如果左端线段短于右端，
//那么左端右移，反之右端左移，直到左右两端移到中间重合，
//记录这个过程中每一次组成木桶的容积，返回其中最大的
//当左端线段L小于右端线段R时，我们把L右移，
//这时舍弃的是L与右端其他线段（R-1, R-2, ...）组成的木桶，
//这些木桶是没必要判断的，
//因为这些木桶的容积肯定都没有L和R组成的木桶容积大。

let maxArea = function(height){
    let res_max = 0,i=0,j=height.length-1
    while(i<j){
        let h = Math.min(height[i],height[j])
        res_max = Math.max(h*(j-i),res_max)
        while(height[i]<=h&&i<j)i++
        while(height[j]<=h&&i<j)j--
    }
    return res_max
}

console.log(maxArea([1,2,3,4]))