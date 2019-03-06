// ["abc", "god", "super"] => ["Abc", "God", "Super"]
function capitaliseFirst(arr) {
    // if array is empty return em
    if (arr.length == 0) return arr
    
    // Else take the first element in the array and pass the remaining array
    let str = arr[0].charAt(0).toUpperCase() + arr[0].substr(1, arr[0].length - 1)
    return [str].concat(capitaliseFirst(arr.splice(1)))
}

// capitaliseFirst(["abc", "god", "super"])
// capitaliseFirst(["capitalise", "first", "buddy"])