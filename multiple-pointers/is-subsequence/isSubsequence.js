function isSubsequence(subseq, seq) {
    // Iterate both the string in a loop whenever a letter matches with subseq increment subseq ptr
    // if the subseq ptr reaches the end then return true else return false
    if (subseq.length === 0 || seq.length === 0) {
        return false
    }
    let j = 0;
    for (let i = 0; i < seq.length && j < subseq.length; i++) {
        if (subseq[j] === seq[i]) {
            j++;
            if (j >= subseq.length) {
                break;
            }
        }
    }
    return j === subseq.length
}

// isSubsequence('hello', 'hello world') // true
// isSubsequence('sing', 'sting') // true
// isSubsequence('abc', 'abracadabra') //true
// isSubsequence('abc', 'acb') // false