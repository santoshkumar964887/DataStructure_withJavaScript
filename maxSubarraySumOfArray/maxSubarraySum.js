/*Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. */
/**Time Complexity - O(N) */
function maxSubarraySum(arr, n) {
  var maxSum = 0,
    i = 0;
  let sum = 0,
    l = arr.length;
  if (l<n) {
    console.log(null);
    return;
  }
  for (; i < n; i++) {
    maxSum += arr[i];
  }

  sum = maxSum;
  for (i = n; i < l; i++) {
    sum = sum - arr[i - n] + arr[i];
    if (sum > maxSum) maxSum = sum;
  }

  console.log(maxSum);
}
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
