function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

function selectionSort(arr) {
    if (arr.length < 1) {
        return arr
    }
    // Get the least possible element on every pass
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j
            }
        }
        swap(arr, i, minIdx)
    }
    return arr
}

selectionSort([4, 2, 5, 3, 1])
