/*
给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
请注意，它是排序后的第k小元素，而不是第k个元素。

示例:
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

返回 13。

说明:
你可以假设 k 的值永远是有效的, 1 ≤ k ≤ n2 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

const smallNum = (arr, num) => {
  let count = 0, i = arr.length - 1, j = 0;

  while(i >= 0 && j < arr.length) {
    if(arr[i][j] <= num) {
      count += i + 1;
      j++;
    }
    else {
      i--;
    }
  }

  return count;
}

var kthSmallest = function(matrix, k) {
  let min = matrix[0][0];
  let max = matrix[matrix.length - 1][matrix.length - 1];
  let center, count;

  while(min < max) {
    center = Math.floor((min + max) / 2);

    count = smallNum(matrix, center);

    if(count < k) {
      min = center + 1;
    }
    else {
      max = center;
    }
  }

  return max;
};

const matrix = [
    [ 1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
  ],
  k = 9;

console.log(kthSmallest(matrix, k));


