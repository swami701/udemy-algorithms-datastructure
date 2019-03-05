// abc -> cba
function reverse(str) {
    // Base if string is empty or 1 element return the same
    if (str.length < 2) return str
    // Take the last char in every iteration and send the array by removing the last char
    return str.charAt(str.length - 1) + reverse(str.substr(0, str.length - 1))
}

// reverse("abc") // cba
// reverse("awesome") // emosewa
// reverse("z") // z
// reverse("") // ""