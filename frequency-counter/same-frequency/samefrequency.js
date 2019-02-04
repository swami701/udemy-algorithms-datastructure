function sameFrequency(x, y) {
    // convert the numbers to string and then have a map to store the count of each char
    // Iterate the map if the values of all the keys are zero then return true else false
    let map = {}
    let sX = `${x}`
    let sY = `${y}`
    if (sX.length !== sY.length) {
        return false
    }
    for (c of sX) {
        map[c] = map[c] ? map[c] + 1 : 1
    }
    // Decrement the counter if not found return false
    for (c of sY) {
        if (map.hasOwnProperty(c)) {
            map[c] = map[c] - 1;
        } else {
            return false
        }
    }
    // Iterate map to find all the values are zero
    for (key in map) {
        if (map[key] !== 0) {
            return false
        }
    }
    return true
}

// sameFrequency(123, 321)
// sameFrequency(34, 14)
// sameFrequency(3589578, 5879385)
// sameFrequency(22, 222)