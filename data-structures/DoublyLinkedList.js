class Node {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.initialise();
    }

    initialise() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    createFirstNode(val) {
        let node = new Node(val)
        this.head = node
        this.tail = node
    }

    push(val) {
        if (this.length === 0) {
            this.createFirstNode(val)
        } else {
            let node = new Node(val)
            node.prev = this.tail;
            this.tail.next = node
            this.tail = node
        }

        this.length++;
        return true;
    }

    pop() {
        if (this.length < 1)
            return false
        if (this.length === 1) {
            this.initialise();
        } else {
            let prev = this.tail.prev;
            prev.next = null

            this.tail.prev = null
            this.tail = null

            this.tail = prev
            this.length--
        }
        return true
    }

    unshift(val) {
        if (this.length === 0) {
            this.createFirstNode(val)
        } else {
            let node = new Node(val)
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.length++
        return true
    }

    shift() {
        if (this.length === 0)
            return false
        if (this.length === 1) {
            this.initialise();
        } else {
            let next = this.head.next;
            this.head.next = null
            this.head = null

            next.prev = null
            this.head = next
            this.length--
        }
        return true
    }

    getAtIdx(idx) {
        if (idx < 0 || idx >= this.length) return undefined
        if (idx > this.length / 2) {
            for (let current = this.tail, i = this.length - 1; i >= idx; i--, current = current.prev) {
                if (i === idx) return current;
            }
        } else {
            for (let current = this.head, i = 0; i <= idx; i++, current = current.next) {
                if (i === idx) return current
            }
        }
        return undefined
    }

    insertAtIdx(idx, val) {
        if (idx < 0 || idx > this.length) return false
        if (idx === 0) return this.unshift(val)
        if (idx === this.length) return this.push(val)
        let prev = this.getAtIdx(idx - 1)
        if (!prev) return false;
        let next = prev.next;
        let newNode = new Node(val)
        newNode.prev = prev;
        newNode.next = next
        next.prev = newNode
        prev.next = newNode
        this.length++
        return true
    }

    removeAtIdx(idx, val) {
        if (idx < 0 || idx >= this.length) return false
        if (idx === 0) return this.shift()
        if (idx === this.length - 1) return this.pop()
        let node = this.getAtIdx(idx)
        if (!node) return false
        let prev = node.prev
        let next = node.next
        prev.next = next
        next.prev = prev
        
        node.next = null
        node.prev = null
        node = null
        this.length--
        return true 
    }
}

// let list = new DoublyLinkedList()
// list.push(10)
// list.push(20)
// list.push(30)
// list.push(40)
// list.push(50)

