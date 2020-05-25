const arr = [1, 4, 5, 3, 2]
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

console.log(insertSort(arr));


const insertSort = arr => {
    let temp = 0
    for (let i = 1; i < arr.length; i++) {
        let j = i
        temp = arr[j]
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
    return arr
}