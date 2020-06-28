/*Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist*/
/*Time Complexity - O(N) */
/*Space Complexity - O(1) */
function sumZero(arr) {
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    sum = arr[l] + arr[r];
    if (sum == 0) return [arr[l], arr[r]];
    else if (sum < 0) l++;
    else if (sum > 0) r--;
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
