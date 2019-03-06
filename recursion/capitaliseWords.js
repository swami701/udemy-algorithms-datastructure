// ["abc", "udemy", "awesome"] // ["ABC", "UDEMY", "AWESOME"]
function capitaliseWords(arr) {
    if (arr.length === 0) return []
    return [capitaliseString(arr[0])].concat(capitaliseWords(arr.splice(1)))
}
function capitaliseString(str) {
    if (str.length === 0) return str
    return str.charAt(0).toUpperCase() + capitaliseString(str.substr(1, str.length - 1))
}

// capitaliseString("hello")

capitaliseWords(["abc", "udemy", "awesome"])