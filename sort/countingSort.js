const arr = [1, 4, 5, 3, 2]
const findMaxValue = arr => {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

const countingSort = arr => {
    if (arr.length < 2) return arr
    let maxElem = findMaxValue(arr)
    let counts = new Array(maxElem + 1)
    arr.forEach(item => {
        if (!counts[item]) {
            counts[item] = 0
        }
        counts[item]++
    });

    let sortedIndex = 0
    counts.forEach((count, i) => {
        while (count > 0) {
            arr[sortedIndex++] = i
            count--
        }
    })
    return arr
}

console.log(countingSort(arr));