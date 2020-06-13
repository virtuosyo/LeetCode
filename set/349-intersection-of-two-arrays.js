/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set = [...new Set(nums1)]
    return set.filter(item => nums2.includes(item))
};

var intersection = function (nums1, nums2) {
    let obj = {}
    nums1.forEach(item => {
        if (!obj[item]) {
            obj[item] = 1
        }
        obj[item]++
    })
    let result = []
    for (let k in obj) {
        if (nums2.includes(parseInt(k))) {
            result.push(k)
        }
    }
    return result
};