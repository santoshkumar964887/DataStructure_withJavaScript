/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. */
/*Time Complexity - O(N) */
function countUniqueValues(arr) {
  var dict = {};
  var c = 0;
  for (let val of arr)
    if (dict[val]) dict[val] += 1;
    else {
      dict[val] = 1;
      c++;
    }

  console.log(c);
}
countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);
