function quickSort(arr, start, end) {
    console.log("Before"+" s: "+start+" end: "+end)
    console.log(arr)
    if (start >= end) {
        return arr
    }
    let pivotIdx = pivotHelper(arr, start, end)
    console.log("After: " + " p: "+ pivotIdx)
    console.log(arr)
    // split the array before the pivot and after the pivot and repeat until it reaches 1 or empty arr
    arr = quickSort(arr, start, pivotIdx - 1);
    arr = quickSort(arr, pivotIdx + 1, end)
    return arr
}

function pivotHelper(arr, start, end) {
    // take the first element as pivot with in the start & end and order the smaller numbers to left and larger ones to right
    if (arr.length < 2) {
        return arr
    }
    // Arrange the smaller numbers left of pivot and greater numbers to right of pivot 
    let pivot = arr[start];
    let sCnt = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            sCnt++
            swapArrayElements(arr, sCnt, i);
        }
    }
    swapArrayElements(arr, start, sCnt);
    return sCnt
}

function swapArrayElements(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

quickSort([5, 9, 2, 11, 1, 15, 4, 7, -2, -5, 3], 0, 10);
// s= 0 e = 5 - [5, 9, 2, 4, 7, 3]
//  p = 3 - [2, 4, 3, 5, 7, 9]
// s = 0, e = 2 [2, 4, 3]  & s = 4, e = 5 [7, 9]
// p = 0 - [2, 4, 3, 5, 7, 9] & p = 4 [ 2, 4, 3, 5, 7, 9]
// s = 0, e = -1 
// s = 0, e = 0 & s = 5, e = 5
// [2, 3, 4] 