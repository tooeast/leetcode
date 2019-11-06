/*
在一个由小写字母构成的字符串 S 中，包含由一些连续的相同字符所构成的分组。
例如，在字符串 S = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。
我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。
最终结果按照字典顺序输出。

示例 1:
输入: "abbxxxxzzy"
输出: [[3,6]]
解释: "xxxx" 是一个起始于 3 且终止于 6 的较大分组。

示例 2:
输入: "abc"
输出: []
解释: "a","b" 和 "c" 均不是符合要求的较大分组。

示例 3:
输入: "abcdddeeeeaabbbcd"
输出: [[3,5],[6,9],[12,14]]
说明:  1 <= S.length <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/positions-of-large-groups
*/

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  let res = [], start = 0, num = 0, tmp;

  S = S.split('');
  tmp = S[0];

  // 逐个遍历，记录出现次数和首次出现位置就行
  S.forEach((item, index) => {
    if(item === tmp) {
      num++;

      if(index == S.length - 1 && num >= 3) {
        res.push([start, index]);
      }
    }
    else {
      tmp = item;

      if(num >= 3) {
        res.push([start, index - 1]);
      }
      num = 1;
      start = index;
    }
  })
  
  return res;
};

const S = "abcdddeeeeaabbbcd";
// const S = 'abccc';

console.log(largeGroupPositions(S));
