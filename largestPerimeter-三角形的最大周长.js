/*
给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
如果不能形成任何面积不为零的三角形，返回 0。

示例 1：
输入：[2,1,2]
输出：5

示例 2：
输入：[1,2,1]
输出：0

示例 3：
输入：[3,2,3,4]
输出：10

示例 4：
输入：[3,6,2,3]
输出：8

提示：
3 <= A.length <= 10000
1 <= A[i] <= 10^6

链接：https://leetcode-cn.com/problems/largest-perimeter-triangle
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  let max = 0;
  
  // 把A按照从大到小排序
  A.sort((a, b) => b - a);

  // 最大的三个数字能否组成三角形，不能的话一定是最大值太大了。去掉最大值重复
  for(let i = 0; i < A.length - 2; i++) {
    if(A[i] < A[i + 1] + A[i + 2]) {
      max = A[i] + A[i + 1] + A[i + 2];
      break;
    }
  }

  return max;
};

const A = [3,6,2,3];

console.log(largestPerimeter(A));

