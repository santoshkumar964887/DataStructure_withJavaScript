/*Write a function which takes in a string and returns counts of each character in the string*/

/*Using Logic it has less time  complexity*/

var obje = {};
function CountCharcter(st) {
  for (let i = 0; i < st.length; i++) {
    if (IsAlphaNumric(st.charAt(i))) {
      m = st.charAt(i).toLowerCase();
      if (obje[m]) obje[m] += 1;
      else {
        obje[m] = 1;
      }
    }
  }
  console.log(obje);
}

CountCharcter("sanToshzmcnzggdsgf22455@#$$#@  HJdjsggf562");

function IsAlphaNumric(ch) {
  chIndex = ch.charCodeAt();
  if (
    !(chIndex > 47 && chIndex < 58) &&
    !(chIndex > 64 && chIndex < 91) &&
    !(chIndex > 96 && chIndex < 123)
  )
    return false;

  return true;
}
