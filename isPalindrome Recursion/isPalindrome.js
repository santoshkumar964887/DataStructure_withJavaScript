/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(){
  // add whatever parameters you deem necessary - good luck!
}
*/
function reverse(str){
    if (str.length<=1) return str[0];
    return reverse(str.slice(1))+str[0];
}

function isPalindrome(str){
if(str==reverse(str))return true
return false
}


console.log(isPalindrome("santosh"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
