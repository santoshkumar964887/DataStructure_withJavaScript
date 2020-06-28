/*Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman*/
frequency = {};
function validAnagram(st, st2) {
  var l = st.length;
  var l2 = st2.length;
  if (l != l2) return false;
  for (let i = 0; i < l; i++) {
    frequency[st.charAt(i)]
      ? (frequency[st.charAt(i)] += 1)
      : (frequency[st.charAt(i)] = 1);
  }
  for (let i = 0; i < l2; i++) {
    if (!frequency[st2.charAt(i)]) return false;
    else frequency[st2.charAt(i)] -= 1;
  }
  return true;
}

console.log(validAnagram("rat", "car"));
console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
console.log(validAnagram("awesome", "awesom"));
