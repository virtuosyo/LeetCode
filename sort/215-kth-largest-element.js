// 法一：sortAPI简单快捷 时间一般 空间差 
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

// 法二：冒泡排序法
var findKthLargest = function (nums, k) {
    for (i = 0; i < k; i++) {
        for (j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                var t = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = t
            }
        }
    }
    return nums[nums.length - k];
};

// 法三 最小堆
class MinHeap {
    constructor() {
        this.heap = []
    }
    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }
    getParentIndex(i) {
        return (i - 1) >> 1
    }
    getLeftIndex(i) {
        return i * 2 + 1
    }
    getRightIndex(i) {
        return i * 2 + 2
    }
    shiftUp(index) {
        if (index === 0) return
        const parentIndex = this.getParentIndex(index)
        if (this.heap[parentIndex] > this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            this.shiftUp(parentIndex)
        }
    }
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if (this.heap[leftIndex] < this.heap[index]) {
            [this.heap[leftIndex], this.heap[index]] = [this.heap[index], this.heap[leftIndex]]
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            [this.heap[rightIndex], this.heap[index]] = [this.heap[index], this.heap[rightIndex]]
            this.shiftDown(rightIndex)
        }
    }
    pop() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }
    peak() {
        return this.heap[0]
    }
    size() {
        return this.heap.length
    }
}

var findKthLargest = function (nums, k) {
    const h = new MinHeap()
    nums.forEach(item => {
        h.insert(item)
        if (h.size() > k) {
            h.pop()
        }
    })
    return h.peak()

};

