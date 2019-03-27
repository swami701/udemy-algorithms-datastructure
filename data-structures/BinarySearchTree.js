class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let node = new Node(val)
        if (this.root === null) {
            this.root = node
            return true
        } 

        let current = this.root
        while(true) {
            if (val === current.val) return false
            if (val < current.val) { 
                if (current.left === null) {
                    current.left = node
                    return true
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = node
                    return true
                } else {
                    current = current.right
                }
            }
        }
    }

    isValuePresent(val) {
        let current = this.root
        while(current) {
            if (current.val === val) return true
            current = val > current.val ? current.right : current.left  
        }
        return false
    }
}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(3)
bst.insert(8)
bst.insert(15)
bst.insert(12)
bst.insert(16)

//       10
//      /  \
//    5     15
//   / \   /  \
// 3    8 12   16