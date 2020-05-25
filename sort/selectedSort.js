const arr = [1, 4, 5, 3, 2]
const selectedSort = array => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            [array[minIndex], array[i]] = [array[i], array[minIndex]]
        }
    }
    return array
}

console.log(selectedSort(arr));

const selectedSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}