function factorial(num) {
    // base case is if num <= 1 return 1; otherwise multiply with the current number and call the factorial for prev number

    if (num < 2) {
        return 1
    }
    return num * factorial(num - 1)
}

// factorial(1) // 1
// factorial(0) // 1
// factorial(4) // 24
// factorial(7) // 5040