// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.


// const nums = [2,7,11,15]
// const target = 9

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {

        for (j = i + 1; j < nums.length; j++) {

            if (nums[j] === target - nums[i]) {
                return [i, j];
            }
        }
    }
    
    return null; 
    
};

// console.log(twoSum(nums, target));