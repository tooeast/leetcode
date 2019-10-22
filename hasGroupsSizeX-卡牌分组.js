/*
给定一副牌，每张牌上都写着一个整数。
此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

示例 1：
输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

示例 2：
输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。

示例 3：
输入：[1]
输出：false
解释：没有满足要求的分组。

示例 4：
输入：[1,1]
输出：true
解释：可行的分组是 [1,1]

示例 5：
输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]

提示：
1 <= deck.length <= 10000
0 <= deck[i] < 10000

链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
*/

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  deck = deck.sort((a, b) => a - b);

  let arr = [], tmp = deck[0], num = 0;

  for (let i = 0; i < deck.length; i++) {
    if(deck[i] == tmp) {
      num++;
    }
    else {
      arr.push(num);
      num = 1;
      tmp = deck[i]
    }
  }

  arr.push(num);
  // 以上这是为了求出每个数字出现的次数

  arr = arr.sort((a, b) => a - b);

  // 求最大公约数
  let maxNum = (a, b) => b ? maxNum(b, a % b) : a;

  tmp = arr[0];

  // arr 排序后，第一个是最小值。然后每个值和第一个值求最大公约数，都有的话就OK
  for(let i = 0; i < arr.length; i++) {
    // 有一个不行就不行
    if(maxNum(tmp, arr[i]) == 1) {
      return false;
    }
  }

  return true;
};

const deck = [1];
// const deck = [1,1,1,2,2,2,3,3,3];

console.log(hasGroupsSizeX(deck));


