function radixSort(arr) {
    // Have 9 buckets for each digit
    // Helper to find the number of digit
    // Helper function for finding the digit based on the integer
    let maxDigit = 0;
    for (let val of arr) {
        let nDigits = getNumberOfDigits(val)
        maxDigit = nDigits > maxDigit ? nDigits : maxDigit
    }
    if (maxDigit <= 0) {
        return arr
    }
    let buckets = []
    for (let i = 1; i <= maxDigit; i++) {
        for (let val of arr) {
            let nmbr = getNumberAtPosition(val, i)
            let valArr = []
            if (buckets[nmbr]) {
                valArr = buckets[nmbr]
            }
            valArr.push(val)
            buckets[nmbr] = valArr
        }
        // Reconstructing the original array
        arr = []
        for (let j = 0; j < buckets.length; j++) {
            let key = buckets[j]
            if (key) {
                for (let val of key) {
                    arr.push(val)
                }
            }
        }
        buckets = []
    }
    return arr
}

function getNumberOfDigits(number) {
    if (number === 0) return 1
    return Math.floor(Math.log10(Math.abs(number))) + 1

}

function getNumberAtPosition(number, position) {
    let posPow = Math.pow(10, position)
    let prePosPow = Math.pow(10, position - 1)
    return Math.floor(number % posPow / prePosPow)
}

// getNumberOfDigits(-1)
// getNumberAtPosition(1234, 7)
// radixSort([432, 532, 23, 4])
radixSort([43232, 234234532, 232, 434, 321, 33, 2, 74, 39283, 3944, 29883, 773828])
// radixSort([432, 51, 432, 23, 4])

