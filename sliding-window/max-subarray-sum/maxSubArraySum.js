function maxSubArraySum(arr, interval) {
    // Check for the arr length with the interval
    if (arr.length < interval) {
        return null
    }
    // Have two pointers, calculate the sum until the diff of ptr2 and ptr1 is reached,
    // Once diff reached, compare the calculated sum with result and update the result and
    // increment the ptr1 by recalculate the sum
    let result = 0;
    for (let ptr1 = 0, ptr2 = 0, sum = 0; ptr2 < arr.length; ptr2++) {
        sum += arr[ptr2];
        if (ptr2 - ptr1 + 1 === interval) {
            result = result < sum ? sum : result;
            sum -= arr[ptr1];
            ptr1++
        }
    }
    return result
}

// maxSubArraySum([100, 200, 300, 400], 2) // 700
// maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 2, 0], 4) // 39
// maxSubArraySum([-3, 4, 0, -2, 6, -1], 2) // 5
// maxSubArraySum([3, -2, 7, -4, 1, -4, 1, -2, 1], 2) // 5
// maxSubArraySum([2, 3], 3) // null
