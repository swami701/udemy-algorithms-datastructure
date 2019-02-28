function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

function bubbleSort(arr) {
    // compare adjacent element and swap the largest one to end in one pass
    console.log("Hello")
    if (arr.length < 2) {
        return arr
    }
    for (let i = arr.length; i >= 0; i--) {
        let isSwapped = false
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                isSwapped = true
            }
        }
        if (!isSwapped) break
    }
    return arr
}

bubbleSort([2, 34, 100, 43, 23, 4, 75])
