/*Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. */
/*Time Complexity - O(N) */
FrequencyCounter1 = {};
FrequencyCounter2 = {};
function same(ar1, ar2) {
  l1 = ar1.length;
  l2 = ar2.length;
  if (!l1 || !l2) return false;
  if (l1 != l2) return false;
  for (let i = 0; i < ar1.length; i++) {
    FrequencyCounter1[ar1[i]]
      ? (FrequencyCounter1[ar1[i]] += 1)
      : (FrequencyCounter1[ar1[i]] = 1);
  }
  for (let i = 0; i < ar1.length; i++) {
    FrequencyCounter2[ar2[i]]
      ? (FrequencyCounter2[ar2[i]] += 1)
      : (FrequencyCounter2[ar2[i]] = 1);
  }
  for (let key in FrequencyCounter1) {
    if (!(key ** 2 in FrequencyCounter2)) {
      return false;
    }
    if (FrequencyCounter2[key ** 2] != FrequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 2, 3], [4, 4, 9, 1, 1]));
