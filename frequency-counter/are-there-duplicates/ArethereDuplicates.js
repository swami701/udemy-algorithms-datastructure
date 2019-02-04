function areThereDuplicates(arr) {
    let obj = {}
    // Iterate the array and save in obj and check while saving it already exists
    for (val of arr) {
        console.log(val)
        if (obj.hasOwnProperty(val)) {
            return true;
        }
        obj[val] = true;
    }
    return false;
}

areThereDuplicates([1, 2, 3, 4, 2])