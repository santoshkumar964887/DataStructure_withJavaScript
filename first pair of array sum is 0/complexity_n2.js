/*Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist*/
/*Time Complexity - O(N)2 */
/*Space Complexity - O(1) */
function sumZero(arr) {
  for (let val of arr) {
    for (let val1 of arr) {
      if (val + val1 == 0) return [val, val1];
    }
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
