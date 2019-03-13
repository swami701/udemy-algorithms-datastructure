function nestedEvenSum(obj) {
    // no keys in object return 0
    if (Object.keys(obj).length <= 0)  return 0
    let key = Object.keys(obj)[0];
    let val = obj[key]
    let num = 0
    if (typeof val === 'object') {
         num = nestedEvenSum(val)
    }
    else if (typeof val === 'number' && val % 2 === 0) {
        num = val
    }
    delete obj[key]
    return num + nestedEvenSum(obj)
}

let obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

let obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
}

// nestedEvenSum(obj1) //6
// nestedEvenSum(obj2) // 10

