let arr = [1, 2, 3, 1]

function rec_opt(arr, i) {
    if (i === 0) {
        return arr[0]
    } else if (i === 1) {
        return Math.max(arr[0], arr[1])
    } else {
        let A = rec_opt(arr, i - 2) + arr[i]
        let B = rec_opt(i - 1)
        return Math.max(A, B)
    }
}
console.log(rec_opt(arr,3));
// var rob = function (nums) {

// };