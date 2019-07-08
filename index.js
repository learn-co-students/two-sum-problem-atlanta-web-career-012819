function bruteForceTwoSum (nums, sum) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === sum) {
                result.push([nums[i], nums[j]])
            }
        }
    }
    return result;
}