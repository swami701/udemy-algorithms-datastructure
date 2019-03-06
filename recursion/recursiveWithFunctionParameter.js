// isOdd => return val % 2 !== 0
// ([2, 4, 6, 8], isOdd) => false
// let isOdd = val => val % 2 !== 0
// let isEven = val => val % 2 === 0
function recursiveWithFunctionParameter(arr, func) {
    if (arr.length === 0) {
        return true
    }
    let element = arr[0]
    if (func(element) === false) return false
    return recursiveWithFunctionParameter(arr.splice(1), func)
}

// recursiveWithFunctionParameter([1, 3, 5], isOdd) // true
// recursiveWithFunctionParameter([2, 4, 6], isEven) // true
// recursiveWithFunctionParameter([2, 4, 5], isEven) //false
// recursiveWithFunctionParameter([3, 4, 5], isOdd) // false

