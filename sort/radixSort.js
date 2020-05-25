const arr = [1, 4, 5, 3, 2]
const getBucketIndex = (value, minValue, significantDigit, radixBase) =>
    Math.floor(((value - minValue) / significantDigit) % radixBase);
const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
    let bucketsIndex;
    const buckets = [];
    const aux = [];
    for (let i = 0; i < radixBase; i++) {
        buckets[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase);
        buckets[bucketsIndex]++;
    }
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1];
    }
    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase);
        aux[--buckets[bucketsIndex]] = array[i];
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i];
    }
    return array;
};

const radixSort = (arr, radixBase) => {
    if (arr.length < 2) {
        return arr
    }
    let minValue = 0
    let maxValue = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
        } else if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }

    let significantDigit = 1
    while ((maxValue - minValue) / significantDigit >= 1) {
        arr = countingSortForRadix(arr, radixBase, significantDigit, minValue)
        significantDigit *= radixBase
    }
    return arr
}

console.log(radixSort(arr, 10));