function minSubArrayLen(arr, value) {
    // Construct map with sum on each individual index
//     let sumMap = {}
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         map[i] = sum
//     }
    // Two ptrs, sum, cnt
    // Calculate the sum on every visit on ptr2 which is iterating the array. if sum >= value increment the ptr1 and 
    // recaculate sum until sum < value, calculate the diff of ptr1 & ptr2 and compare with the result
    // and get the minimum diff in the result
    let result = arr.length + 1;
    let sum = 0;
    for (let ptr2 = 0, ptr1 = 0; ptr2 < arr.length && ptr1 < arr.length && ptr1 <= ptr2;) {
        sum += arr[ptr2]
        if (sum >= value) {
            result = result > ptr2 - ptr1 ? ptr2 - ptr1 : result 
            sum -= arr[ptr1]
            sum -= arr[ptr2]
            ptr1++
        } else {
            ptr2++
        }
    }
    return result === arr.length + 1 ? 0 : result + 1
}

// minSubArrayLen([1,2,3,5,7], 6) // 2
// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2
// minSubArrayLen([2, 1, 6, 5, 4], 9) // 2
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2



