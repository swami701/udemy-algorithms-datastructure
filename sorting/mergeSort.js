function mergeSortedArrays(arr1, arr2) {
    let result = []
    let i = 0, j = 0, k = 0;
    while (i < arr1.length && j < arr2.length) {
        result[k++] = arr1[i] > arr2[j] ? arr2[j++] : arr1[i++]
    }
    while (i < arr1.length) {
        result[k++] = arr1[i++]
    }
    while (j < arr2.length) {
        result[k++] = arr2[j++]
    }
    return result
}

function mergeSort(arr) {
    // Divide the array by finding the midpoint recursively until it's a single element or empty array
    // Call mergeSortedArrays function for the subarray
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length/2);
    let leftArr = mergeSort(arr.slice(0, mid))
    let rightArr = mergeSort(arr.slice(mid))
    return mergeSortedArrays(leftArr, rightArr)
}

// mergeSortedArrays([4, 2, 7], [3, 5, 8, 10]);

mergeSort([4, 5, 3, 2, 7, 1]);

// Call trace
// [4, 5, 3]           [2, 7, 1]
// [4], [5,3]        [2], [7, 1]
// [4], [5], [3]     [2], [7], [1]
// [4], [3, 5]       [2], [1, 7]
// [3, 4, 5]         [1, 2, 7]
// [1, 2, 3, 4, 5, 7]