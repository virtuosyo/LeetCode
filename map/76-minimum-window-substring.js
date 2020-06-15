/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let l = 0
    let r = 0
    const map = new Map()
    for (let c of t) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }
    let needType = map.size
    let res = ''
    while (r < s.length) {
        const k = s[r]
        if (map.has(k)) {
            map.set(k, map.get(k) - 1)
            if (map.get(k) === 0) {
                needType--
            }
        }
        while (needType === 0) {
            const newRes = s.substring(l, r + 1)
            if (!res || newRes.length < res.length) res = newRes
            const k2 = s[l]
            if (map.has(k2)) {
                map.set(k2, map.get(k2) + 1)
                if (map.get(k2) === 1) {
                    needType++
                }
            }
            l++
        }
        r++
    }
    return res
};