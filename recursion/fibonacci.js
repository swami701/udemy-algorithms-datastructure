// Series: 1 1 2 3 5 8
function fibonacci(val) {
    // Base if val is 1 or 2 return 1
    if (val < 3) return 1
    // else return fibonacci (n-1) + fibonacci (n-2)
    return fibonacci(val-1) + fibonacci(val-2)
}

// fibonacci(1) // 1
// fibonacci(3) // 2
// fibonacci(4) // 3
// fibonacci(10) // 55
// fibonacci(28) // 317811
// fibonacci(35) // 9227465