/*
在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。
每个矩形由其左下顶点和右上顶点坐标表示，如图所示。

   --------------
   |            |
   |       -----|--------
   |       |    |       |
   --------------       |
           |            |
           --------------

示例:
输入: -3, 0, 3, 4, 0, -1, 9, 2
输出: 45
说明: 假设矩形面积不会超出 int 的范围。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rectangle-area
*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  let area = (a, b, c, d) => (c - a) * (d - b);

  let all = area(A, B, C, D) + area(E, F, G, H);

  // 没重叠的话返回两个矩形的面积和
  if(C <= E || D <= F || A >= G || B >= H) {
    return all
  }

  // 重叠的话减去重叠部分的面积就行了
  return all - area(Math.max(A, E), Math.max(B, F), Math.min(C, G), Math.min(D, H));
};

// const A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2;
const A = -3, B = 0, C = 3, D = 4, E = -2, F = 1, G = 2, H = 2;

console.log(computeArea(A, B, C, D, E, F, G, H))

