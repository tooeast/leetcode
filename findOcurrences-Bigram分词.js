/*
给出第一个词 first 和第二个词 second，考虑在某些文本 text 中可能以 "first second third" 形式出现的情况，其中 second 紧随 first 出现，third 紧随 second 出现。
对于每种这样的情况，将第三个词 "third" 添加到答案中，并返回答案。

 示例 1：
输入：text = "alice is a good girl she is a good student", first = "a", second = "good"
输出：["girl","student"]

示例 2：
输入：text = "we will we will rock you", first = "we", second = "will"
输出：["we","rock"]

链接：https://leetcode-cn.com/problems/occurrences-after-bigram
*/

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  let res = [];

  text.split(' ').map((item, index, arr) => {
    if(item == first && arr[index + 1] && arr[index + 1] == second) {
      arr[index + 2] && res.push(arr[index + 2]);
    }
  })

  return res;
};

// const text = "alice is a good girl she is a good student", first = "a", second = "good"

const text = "we will we will rock you", first = "we", second = "will";

console.log(findOcurrences(text, first, second));

