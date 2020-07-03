const arr = [1, 4, 5, 3, 2]
const bubbleSort = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array
}

console.log(bubbleSort(arr));