function Anagram(str1, str2) {
    console.log("Inside Anagram")
    let obj = {};
    // Length mismatch check
    // Store str1 characters in map with each char count
    for (ch of str1) {
        obj[ch] = obj[ch] ? obj[ch] + 1 : 1;
    }
    // Iterate str2 if char is found in map decrement
    for (ch of str2) {
        if (obj.hasOwnProperty(ch)) {
            obj[ch] = obj[ch] - 1;
            if (obj[ch] < 0) {
                return false
            }
        } else {
            return false
        }
    }
    // Iterate map and check all values are zero
    for (key in obj) {
        if (obj[key] !== 0) {
            return false;
        }
    }

    return true;
}

// Anagram("abc", "cba");
// Anagram("abc", "ba")
// Anagram("abc", "cba")
