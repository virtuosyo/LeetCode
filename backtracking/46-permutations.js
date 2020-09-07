/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []
    const backTrack = (path) => {
        if (path.length === nums.length) {
            res.push(path)
            return
        }
        nums.forEach(item => {
            if (path.includes(item)) {
                return
            }
            backTrack(path.concat(item))
        })
    }
    backTrack([])
    return res
};