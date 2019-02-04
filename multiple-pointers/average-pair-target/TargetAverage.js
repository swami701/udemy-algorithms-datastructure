function targetAverage(arr, avg) {
    // check early exit
    if (arr.length === 0 || arr[0] >= avg || arr[arr.length-1] <= avg) {
        return false
    }
    // Locate two pointers one is less the value of the avg and other greater than the value of avg
    let ptr1 = 0;
    let ptr2 = arr[arr.length - 1]
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] < avg) {
           ptr1 = arr[i];
       }
       if (arr[i] > avg) {
           ptr2 = i;
           break;
       }
    }
    // Find the average of the two pointers value
    // If it's less increment the right pointer until reaches the end, if it's more increment the left pointer until 0 index
    while (ptr1 >= 0 && ptr2 < arr.length) {
        let cAvg = (arr[ptr1] + arr[ptr2]) / 2
        if (cAvg == avg) {
            return true
        }
        if (cAvg < avg) {
            ptr2++;
        } else {
            ptr1--;
        }
    }
    return false
}

// targetAverage([1,2,3], 2.5)
// targetAverage([1,3,3,5,6,7,10,12,19], 8)
// targetAverage([-1,-0,3,4,5,6], 4.1)
// targetAverage([], 4)
