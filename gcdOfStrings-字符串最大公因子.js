/*
对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
返回字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

示例 1：
输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"

示例 2：
输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"

示例 3：
输入：str1 = "LEET", str2 = "CODE"
输出：""
 
提示：
1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1[i] 和 str2[i] 为大写英文字母

链接：https://leetcode-cn.com/problems/greatest-common-divisor-of-strings
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let res = '';
  let reg = '';
  let tmp = '';

  if(str1.length < str2.length) {
    res = str1;
    str1 = str2;
    str2 = res;
    res = '';
  }

  for(let i = 0; i < str2.length; i++) {
    tmp = str2.slice(0, i + 1);

    reg = RegExp(tmp, 'g')

    if(!str1.replace(reg, '') && !str2.replace(reg, '')) {
      res = tmp;
    }
  }

  return res;
};

// const str1 = "ABCABC";
// const str2 = "ABC";

// const str1 = "ABABAB";
// const str2 = "ABAB";

const str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX";
const str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";

console.log(gcdOfStrings(str1, str2));
