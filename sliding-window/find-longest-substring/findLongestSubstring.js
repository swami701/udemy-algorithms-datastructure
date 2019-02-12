function findLongestSubstring(str) {
    // check for empty & single char
    if (str.length < 2) {
        return str.length;
    }
    let res = 0;
    let map = {}, prevIdx = 0
    map[str[0]] = 0
    for (ptr2 = 1; ptr2 < str.length; ptr2++) {
        if (map[str[ptr2]] >= prevIdx) {
            prevIdx = map[str[ptr2]] + 1
        }
        res = res < ptr2 - prevIdx ? ptr2 - prevIdx : res;
        map[str[ptr2]] = ptr2
    }
    // Iterate the string with two ptrs keep it in a map to check the char doesn't exist already
    // If a char exist in the map, store the diff of first & sec ptr, and move the first ptr to next index of the matched char
    // if the diff is higher overwrite the result stored & return the result
    
    return res+1;
}

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6