class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// 
class BinaryMaxHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        this.values.push(val)
        this.bubbleUp()
        return true
    }

    bubbleUp() {
        if (this.values.length < 2) return
        let current = this.values.length - 1;
        let parent = Math.floor((current - 1) / 2)
        while (parent >= 0 && this.values[current] > this.values[parent]) {
            this.swap(current, parent)
            current = parent
            parent = Math.floor((current - 1) / 2)
        }
    }

    extractMax() {
        if (this.values.length < 1) return 
        if (this.values.length == 2) {
            return this.values.shift()
        }
        let max = this.values[0] 
        this.swap(this.values.length - 1, 0)
        this.values.pop();
        this.trickleDown()
        return max
    }

    trickleDown() {
        let parent = 0
        let child1 = (2 * parent) + 1
        let child2 = child1 + 1
        while (child1 < this.values.length) {
            let child = (child2 < this.values.length && this.values[child2] > this.values[child1]) ? child2 : child1;
            if (this.values[child] > this.values[parent]) {
                this.swap(child, parent)
                parent = child
            } else {
                break
            }
            child1 = (2 * parent) + 1
            child2 = child1 + 1
        }
    }

    swap(idx1, idx2) {
        if (idx1 < 0 || idx2 < 0 || idx1 > this.values.length || idx2 > this.values.length) return
        let temp = this.values[idx1];
        this.values[idx1] = this.values[idx2]
        this.values[idx2] = temp
    }
}

let heap = new BinaryMaxHeap();
heap.insert(10)
heap.insert(5)
heap.insert(6)
heap.insert(4)
heap.insert(2)
heap.insert(3)
heap.insert(1)

//         10
//        /   \
//       5     6
//      / \   / \
//     4   2 3   1
// Values: 10   5   6   4   2   3   1


//         3
//        /   \
//       2     1
//          
//            
