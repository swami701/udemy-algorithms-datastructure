// abc => false, aba => true
function isPalindrome(str) {
    console.log(str)
    // if str length = 1 return true
    if (str.length <= 1) return true

    // if first and last index value is not same  return false
    if (str.charAt(0) !== str.charAt(str.length - 1)) return false
    
    // else strip of the first and last char and call again
    return isPalindrome(str.substr(1, str.length - 2))
}

// isPalindrome("abc") // false
// isPalindrome("aba") // true
// isPalindrome("awesome") // false
// isPalindrome("foobar") // false
// isPalindrome("tacocat") // true
// isPalindrome("amanaplanacanalpanama") // true
// isPalindrome('amanaplanacanalpandemonama') // false

