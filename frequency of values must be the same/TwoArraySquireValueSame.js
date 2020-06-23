/*Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. */
/*Time Complexity - O(N^2) */

function same(ar1, ar2) {
  l1 = ar1.length;
  l2 = ar2.length;
  if (!l1 || !l2) return false;
  if (l1 != l2) return false;
  for (let i = 0; i < l1; i++) {
    sq = ar1[i] ** 2;
    flag = 0;
    for (let j = 0; j < l2; j++) {
      if (sq == ar2[j]) flag = 1;
    }
    if (flag == 0) return false;
  }
  return true;
}

console.log(same([1, 2, 5], [9, 4, 1]));
