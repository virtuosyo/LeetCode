/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const map = {};
  let len = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
      if (map[nums[i]] > len) {
        return nums[i];
      }
    } else {
      map[nums[i]] = 1;
    }
  }
};

// 投票算法
var majorityElement = function (nums) {
  let count = 1;
  let majority = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};
