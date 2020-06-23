/*Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman*/
frequency = {};
frequency2 = {};
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
    frequency2[st2.charAt(i)]
      ? (frequency2[st2.charAt(i)] += 1)
      : (frequency2[st2.charAt(i)] = 1);
  }
  for (let key in frequency) {
    if (frequency[key] != frequency2[key]) return false;
  }
  return true;
}

console.log(validAnagram("texttwisttime", "timetwisttext"));
