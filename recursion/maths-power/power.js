function power(val, pow) {
    // Base case is if pow = 0; return 1
    // if pow = 1 return val
    // else multiply with val call the function by reducing the pow
    if (pow === 0) {
        return 1;
    } else if (pow === 1) {
        return val;
    } else {
        return val * power(val, pow - 1)
    }
}

// power(2, 0) // 1
// power(2,2) // 4
// power(2,1) // 2
// power(2,4) // 16