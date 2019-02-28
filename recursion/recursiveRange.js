function recursiveRange(num) {
    // base case if num = 0 return num
    if (num === 0) return num;
    // Else add num + call function with previous number
    return num + recursiveRange(num - 1)
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55