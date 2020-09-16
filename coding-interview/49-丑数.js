/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  const res = new Array(n);
  res[0] = 1;
  for (let i = 1; i <= n; i++) {
    res[i] = Math.min(res[p2] * 2, res[p3] * 3, res[p5] * 5);
    if (res[i] === res[p2] * 2) {
      p2++;
    }
    if (res[i] === res[p3] * 3) {
      p3++;
    }
    if (res[i] === res[p5] * 5) {
      p5++;
    }
  }
  return res[n - 1];
};
