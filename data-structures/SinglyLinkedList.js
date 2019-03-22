class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {

    initialise() {
        this.head = null
        this.tail = null
        this.length = 0        
    }

    constructor() {
        this.initialise()
    }

    push(val) {
        let node = new Node(val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node 
        }
        this.length++
        return true
    }

    getNodeAtIdx(idx) {
        if (idx >= this.length && idx < 0) return null
        let ctr = 0
        let current = this.head
        while(current) {
            if (ctr === idx) return current
            current = current.next
            ctr++
        }
        return null
    }

    pop() {
        if (this.length === 0) return false
        if (this.length === 1) {
            this.initialise()
            return true
        }
        let lastPrev = this.getNodeAtIdx(this.length - 2)
        if (lastPrev === null) return false
        lastPrev.next = null
        this.tail = lastPrev
        this.length--
        return true
    }

    shift(val) {
        let node = new Node(val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.length++
        return true
    }

    unshift() {
        if (this.length === 0) return false
        if (this.length === 1) {
            this.initialise()
            return true
        }
        let temp = this.head
        this.head = this.head.next
        temp = null
        this.length--
        return true
    }

    insertAtIdx(idx, val) {
        if (idx === 0) return this.shift(val)
        let prevNode = this.getNodeAtIdx(idx - 1)
        if (!prevNode) return false
        if (idx === this.length) return this.push(val)
        let node = new Node(val)
        node.next = prevNode.next
        prevNode.next = node
        this.length++
        return true
    }

    removeAtIdx(idx) {
        if (idx >= this.length) return false
        if (idx === 0) return this.unshift()
        let prevNode = this.getNodeAtIdx(idx - 1)
        if (!prevNode) return false
        if (idx === this.length - 1) return this.pop()
        let temp = prevNode.next
        prevNode.next = temp.next
        temp.next = null
        temp = null
        this.length--
        return true
    }
}

// let list = new SinglyLinkedList()
// list.push(10)
// list.push(20)
// list.push(30)
// list.push(40)
// list.push(50)

