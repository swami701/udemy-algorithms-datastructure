function productOfArray(arr) {
    // Base case if it's empty return 1
    if (arr.length === 0) {
        return 1
    }
    // Else multiply with first number and call the function with remaining elements
    return arr[0] * productOfArray(arr.splice(1))
}

// productOfArray([1, 2, 3]) // 6
// productOfArray([1, 2, 3, 10]) // 60