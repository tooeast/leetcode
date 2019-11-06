/*
给定一个由整数数组 A 表示的环形数组 C，求 C 的非空子数组的最大可能和。在此处，环形数组意味着数组的末端将会与开头相连呈环状。（形式上，当0 <= i < A.length 时 C[i] = A[i]，而当 i >= 0 时 C[i+A.length] = C[i]）此外，子数组最多只能包含固定缓冲区 A 中的每个元素一次。（形式上，对于子数组 C[i], C[i+1], ..., C[j]，不存在 i <= k1, k2 <= j 其中 k1 % A.length = k2 % A.length）

示例 1：
输入：[1,-2,3,-2]
输出：3
解释：从子数组 [3] 得到最大和 3

示例 2：
输入：[5,-3,5]
输出：10
解释：从子数组 [5,5] 得到最大和 5 + 5 = 10

示例 3：
输入：[3,-1,2,-1]
输出：4
解释：从子数组 [2,-1,3] 得到最大和 2 + (-1) + 3 = 4

示例 4：
输入：[3,-2,2,-3]
输出：3
解释：从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3

示例 5：
输入：[-2,-3,-1]
输出：-1
解释：从子数组 [-1] 得到最大和 -1
 
提示：

-30000 <= A[i] <= 30000
1 <= A.length <= 30000

来源：力扣（LeetCode）
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
  let originMax = Math.max.apply(Math, A);

  if(originMax <= 0) {
    return originMax;
  }

  let updata = [];
  let flag = A[0] >= 0 ? true : false;;
  let add = 0;

  for(var i = 0; i < A.length; i++) {
    if((A[i] >= 0 && flag) || (A[i] < 0 && !flag)) {
      add += A[i];
    } else {
      updata.push(add);
      add = A[i];
      flag = !flag;
    }

    if(i == A.length - 1) {
      updata.push(add);
    }
  }

  if((updata[0] < 0 && updata[updata.length - 1] < 0) || (updata[0] > 0 && updata[updata.length - 1] > 0)) {
    if(updata.length > 1) {
      updata[0] += updata.pop();
    }
  }

  console.log(i);

  console.log(updata);

  let max = Math.max.apply(Math, updata);

  let rightArr = [...updata.slice(updata.indexOf(max) + 1), ...updata.slice(0, updata.indexOf(max))];
  let tmp;

  console.log(rightArr);

  let rightMax = rightArr.reduce((total, now, index) => {
    tmp = rightArr.slice(0, index + 1).reduce((all, one) => all + one);
    return tmp > total ? tmp : total;
  }, rightArr[0]);

  let leftArr = rightArr.reverse();

  console.log(leftArr);

  let leftMax = leftArr.reduce((total, now, index) => {
    tmp = rightArr.slice(0, index + 1).reduce((all, one) => all + one);
    return tmp > total ? tmp : total;
  }, leftArr[0]);

  console.log('max', max);
  console.log('left', leftMax);
  console.log('right', rightMax)


  if(leftMax > 0 || rightMax > 0) {
    return leftMax > rightMax ? (max + leftMax) : (max + rightMax);
  } else {
    return max;
  }
};


// let arr = [1, -2, 3, -2];
// let arr = [5, -3, 5];
// let arr = [3, -1, 2, -1];
// let arr = [3, -2, 2, -3];
// let arr = [-2, -3, -1];
let arr = [9,7,-6,7,9,-10,5,9,0,-1];

let res = maxSubarraySumCircular(arr);

console.log(res);