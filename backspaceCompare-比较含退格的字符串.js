/*
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

示例 1：
输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。

示例 2：
输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。

示例 4：
输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。
 
提示：
1 <= S.length <= 200
1 <= T.length <= 200
S 和 T 只含有小写字母以及字符 '#'。

链接：https://leetcode-cn.com/problems/backspace-string-compare
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return getRealStr(S) == getRealStr(T);
};

const getRealStr = str => {
  let res = [];

  str.split('').forEach(item => {
    item == '#' ? res.pop() : res.push(item);
  });

  return res.join('');
}

const S = "##c", T = "ad##c";
// const S = "a#c", T = "b";

console.log(backspaceCompare(S, T));
