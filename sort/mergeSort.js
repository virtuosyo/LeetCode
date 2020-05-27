const arr = [1, 4, 5, 3, 2]
const merge = (left, right) => {
    let i = 0
    let j = 0
    const result = []
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++])
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
const mergeSort = array => {
    if (array.length > 1) {
        const middle = Math.floor(array.length / 2)
        const left = mergeSort(array.slice(0, middle))
        const right = mergeSort(array.slice(middle, array.length))
        array = merge(left, right)
    }
    return array
}


const merge = (left, right) => {
    let [i, j] = [0, 0]
    let result = []
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++])
    }
    return result.concat(i < left.length ? left[i] : right[j])
}

const mergeSort = arr => {
    if (arr.length > 1) {
        let middle = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, middle))
        let right = mergeSort(arr.slice(middle, arr.length))
        arr = merge(left, right)
    }
    return arr
}

console.log(mergeSort(arr));