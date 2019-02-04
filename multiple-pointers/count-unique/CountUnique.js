function countUnique(arr) {
    // if len < 2 return length as unique
    if (arr.length < 2) {
        return arr.length
    }
    // If len > 2 Have two pointer prev and current, if prev = current ignore otherwise count
    let prev = arr[0];
    let res = 1
    for (let i = 1; i < arr.length; i++) {
        if (prev !== arr[i]) {
            res++;
            prev = arr[i]
        }
    }
    return res
}

// countUnique([1,1,1,1,1,2])
// countUnique([1,2,3,4,4,4,7,7,12,12,13])
// countUnique([-2,-1,-1,0,1])
// countUnique([1,2])
// countUnique([1])
// countUnique([])
