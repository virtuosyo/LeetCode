// 基于对象实现
class MyCircularQueue {
    constructor(k) {
        this.len = k
        this.count = 0
        this.items = {}
    }
    enQueue(value) {
        if (this.isFull()) {
            return false
        }
        this.items[this.count] = value
        this.count++
        return true
    };
    deQueue() {
        if (this.isEmpty()) {
            return false
        }
        for (let i = 1; i < this.count; i++) {
            this.items[i - 1] = this.items[i]
        }
        this.count--
        delete this.items[this.count]
        return true
    };
    Front() {
        if (this.isEmpty()) {
            return -1
        }
        return this.items[0]
    };
    Rear() {
        if (this.isEmpty()) {
            return -1
        }
        return this.items[this.count - 1]
    };
    isEmpty() {
        return this.count === 0
    };
    isFull() {
        return this.count === this.len
    };
}

class MyCircularQueue {
    constructor(k) {
        this.list = new Array(k)
        // 头指针
        this.front = 0
        // 尾指针
        this.rear = 0
        // 队列长度
        this.max = k
    }
    enQueue(value) {
        if (this.isFull()) {
            return false
        } else {
            this.list[this.rear] = value
            this.rear = (this.rear + 1) % this.max
            return true
        }
    };
    deQueue() {
        let f = this.list[this.front]
        this.list[this.front] = ''
        this.front = (this.front + 1) % this.max
        return true
    };
    Front() {
        return this.list[this.front]
    };
    Rear() {
        return this.list[this.rear - 1 < 0 ? this.max - 1 : this.rear - 1]
    };
    isEmpty() {
        return this.front === this.rear && !this.list[this.front]
    };
    isFull() {
        return this.front === this.rear && this.list[this.front]
    };
}