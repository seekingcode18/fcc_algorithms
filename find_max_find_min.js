function findMaximum(nums) {
  return nums.reduce((a,b,) => a > b ? a : b)
}

findMaximum([77, -5, 2, 89, 44, 37]) //89

function findMinimum(nums) {
  return nums.reduce((a,b,) => a < b ? a : b)
}

findMinimum([77, -5, 2, 89, 44, 37]) //-5
