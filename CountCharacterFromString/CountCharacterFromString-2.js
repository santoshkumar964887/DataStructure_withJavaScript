var st;
var obj = {};
function Characters(st) {
  for (let i = 0; i < st.length; i++) {
    ch = st[i];
    if (/[a-z0-9]/.test(ch)) {
      ch = ch.toLowerCase();

      obj[ch] ? (obj[ch] += 1) : (obj[ch] = 1);
    }
  }
  console.log(obj);
}
Characters("santosh ksjsjh 126565 msdjjvsdsfsdg @@$$$#xvhvn243453");
