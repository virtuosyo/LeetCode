const arr = [1, 4, 5, 3, 2]
const createBuckets = (arr, bucketSize) => {
    let minValue = arr[0]
    let maxValue = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
        } else if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    const bucketCount = Math.floor(((maxValue - minValue) / bucketSize)) + 1
    const buckets = []
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = []
    }
    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize)
        buckets[bucketIndex].push(arr[i])
    }
    return buckets
}

const insertSort = array => {
    let temp
    for (let i = 1; i < array.length; i++) {
        let j = i
        temp = array[j]
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1]
            j--
        }
        array[j] = temp
    }
    return array
}

const sortBuckets = buckets => {
    const sortedArr = []
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] !== null) {
            insertSort(buckets[i])
            sortedArr.push(...buckets[i])
        }
    }
    return sortedArr
}

const bucketSort = (arr, bucketSize) => {
    if (arr.length < 2) return arr
    const buckets = createBuckets(arr, bucketSize)
    return sortBuckets(buckets)
}

console.log(bucketSort(arr, 3));