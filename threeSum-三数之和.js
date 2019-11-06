/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);

  if(nums.length < 3) {
    return [];
  }

  if(nums[0] == 0 && nums[2] == 0) {
    return [[0, 0, 0]];
  }

  let left, right, res = [], hash = {};

  for(let i = 1; i < nums.length - 1; i++) {
    left = i - 1;
    right = i + 1;
    
    while(left >= 0 && right < nums.length) {
      if(nums[left] + nums[right] + nums[i] < 0) {
        right++;
        continue;
      }
      else if(nums[left] + nums[right] + nums[i] > 0) {
        left--;
      }
      else {
        // 用一个哈希验证，防止重复的数组
        if(!hash[[nums[left], nums[i], nums[right]].join('')]) {
          res.push([nums[left], nums[i], nums[right]]);
          hash[[nums[left], nums[i], nums[right]].join('')] = true;
        }

        left <= 0 ? right++ : left--;
      }
    }
  }

  return res;
};
// 三数之和，先把数组排序。先选定一个数作为中间值，然后和左右两边的数相加。如果数大于 0，则左边的数左移，如果小于 0 则右边的数右移。直至为0

// const nums = [-1, 0, 1, 2, -1, -4];
const nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


console.log(threeSum(nums));

