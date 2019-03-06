// [1, 2, 3, [4, 5], [6]] => [1, 2, 3, 4, 5, 6]

function flattenArray(arr) {
    if (arr.length === 0) return []
    if (typeof(arr[0]) === 'object') {
        element = flattenArray(arr[0])   
    } else {
        element = [arr[0]]
    }
    return element.concat(flattenArray(arr.splice(1)))

}

flattenArray([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
// flattenArray([1, 2, [3, 4], 5]) // [1, 2, 3, 4, 5]
// flattenArray([1, 2, 3, [4, 5], [6]]) // [1, 2, 3, 4, 5, 6]
// flattenArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flattenArray([[1], [2], [3]]) //[1, 2, 3]
// flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1, 2, 3]