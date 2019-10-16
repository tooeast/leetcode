/*
学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。
请你返回至少有多少个学生没有站在正确位置数量。该人数指的是：能让所有学生以 非递减 高度排列的必要移动人数。

示例：

输入：[1,1,4,2,1,3]
     [1,1,1,2,3,4]
输出：3
解释：
高度为 4、3 和最后一个 1 的学生，没有站在正确的位置。

*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const right = [].concat(heights).sort((a, b) => a - b);

  return heights.reduce((res, now, index) => {
    return now == right[index] ? res : ++res;
  }, 0);
};

// const list = [1, 1, 4, 2, 1, 3];
const list = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7];

let res = heightChecker(list);

console.log(res);