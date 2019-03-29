class Token {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

// 
class PriorityQueue {
    constructor() {
        this.values = []
    }

    insert(val, priority) {
        let token = new Token(val, priority)
        this.values.push(token)
        this.bubbleUp()
        return this.values
    }

    bubbleUp() {
        if (this.values.length < 2) return
        let current = this.values.length - 1;
        let parent = Math.floor((current - 1) / 2)
        while (parent >= 0 && this.values[current].priority < this.values[parent].priority) {
            this.swap(current, parent)
            current = parent
            parent = Math.floor((current - 1) / 2)
        }
    }

    serveQueue() {
        if (this.values.length < 1) return 
        if (this.values.length == 2) {
            return this.values.shift()
        }
        this.swap(this.values.length - 1, 0)
        this.values.pop();
        this.trickleDown()
        return this.values
    }

    trickleDown() {
        let parent = 0
        let child1 = (2 * parent) + 1
        let child2 = child1 + 1
        while (child1 < this.values.length) {
            let child = (child2 < this.values.length && this.values[child2].priority < this.values[child1].priority) ? child2 : child1;
            if (this.values[child].priority < this.values[parent].priority) {
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

let pQueue = new PriorityQueue();
pQueue.insert("Cold", 10)
pQueue.insert("Headache", 8)
pQueue.insert("Accident", 3)
pQueue.insert("Emergency", 1)
pQueue.insert("Fever", 9)
pQueue.insert("Fracture", 5)
