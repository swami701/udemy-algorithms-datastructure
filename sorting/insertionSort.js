function insertionSort(arr) {
    // Loop through each element and in each pass position build the portion of the array sorted
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let currentVal = arr[i];
        for (; j >= 0 && arr[j] > currentVal; arr[j+1] = arr[j], j--);
        if (j != i - 1) {
            arr[j+1] = currentVal;
        }
    }
    return arr
}

insertionSort([23, 12, 57, 45, 32])
