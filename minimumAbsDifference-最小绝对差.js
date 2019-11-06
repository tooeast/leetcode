/*
给你个整数数组 arr，其中每个元素都 不相同。请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。

示例 1：

输入：arr = [4,2,1,3]
输出：[[1,2],[2,3],[3,4]]
示例 2：

输入：arr = [1,3,6,10,15]
输出：[[1,3]]
示例 3：

输入：arr = [3,8,-10,23,19,-4,-14,27]
输出：[[-14,-10],[19,23],[23,27]]
 
提示：

2 <= arr.length <= 10^5
-10^6 <= arr[i] <= 10^6

来源：力扣（LeetCode）
*/

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let res = [], tmp;
  let min = sorted[1] - sorted[0];
  
  for (let i = 1; i < sorted.length; i++) {
    tmp = sorted[i] - sorted[i - 1];
    if(min > tmp) {
      min = tmp
      res = [[sorted[i - 1], sorted[i]]];
    }
    else if(min == tmp) {
      res.push([sorted[i - 1], sorted[i]]);
    }
  }

  return res;
};

// const arr = [4,2,1,3];
// const arr = [1,3,6,10,15];
const arr = [3,8,-10,23,19,-4,-14,27];

console.log(minimumAbsDifference(arr));