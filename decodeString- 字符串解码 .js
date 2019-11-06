/*
给定一个经过编码的字符串，返回它解码后的字符串。
编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例:
s = "3[a]2[bc]", 返回 "aaabcbc".
s = "3[a2[c]]", 返回 "accaccacc".
s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decode-string
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let num;
  let arr = [];
  let tmp = '';

  // 遍历，一个一个的拿
  s.split('').map(char => {
    // 是数字的话累计计算，防止两个数字挨着的情况
    if(char <= 9 && char >= 0) {
      num = num ? 10 * num + Number(char) : char;
    }

    else if(char == '[') {
      arr.push(num);
      num = 0;
    }

    else if(char == ']') {
      while((num = arr.pop()) && isNaN(Number(num))) {
        tmp = num + tmp;
      }

      for(let i = 0; i < Number(num); i++) {
        arr.push(tmp);
      }

      num = 0;
      tmp = '';
    }

    else {
      arr.push(char);
    }
  })

  return arr.join('');
};

// const s = "3[ab]2[bc]";
// const s = "3[a2[x]2[j3[q]]]cc";
// const s = "2[abc]3[cd]ef";
// const s = '2[jasdd]';
// const s = '2[a3[b2[d]]]';
// const s = '3[a]2[b4[F]c]';
const s = '2[s]ww3[a2[x]ac2[l]c]';
// const s = '100[ac]';

console.log(decodeString(s));
