/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {}, res;

  for(let i = 0; i < nums.length; i++) {
    res = target - nums[i];

    if(hash[res] || hash[res] == 0) {
      return [hash[res], i];
    }

    hash[nums[i]] = i;
  }

  return [];
};
// 这个题目很明显不是让用双层循环来解决，不然就不叫算法题了。
// 所以必须想着降低时间复杂度。所以使用哈希表的方式


const nums = [2, 7, 11, 15], target = 9;

console.log(twoSum(nums, target));

