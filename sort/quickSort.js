const arr = [1, 4, 5, 3, 2]
const quickSort = array => {
    if (array.length < 2) {
        return array
    }
    let pivot = array[0]
    let less = array.slice(1).filter(item => item <= pivot)
    let greater = array.slice(1).filter(item => item > pivot)
    return quickSort(less).concat(pivot, quickSort(greater))
}

// Less is More
var quickSort = arr => arr.length < 2 ? arr : quickSort(arr.slice(1).filter(item => item <= arr[0])).concat(arr[0], quickSort(arr.slice(1).filter(item => item > arr[0])));


console.log(quickSort(arr));

const quickSort = arr => {
    if (arr.length < 2) {
        return arr
    }
    let less = arr.slice(1).filter(item => item <= arr[0])
    let greater = arr.slice(1).filter(item => item > arr[0])
    return quickSort(less).concat(arr[0], quickSort(greater))
}