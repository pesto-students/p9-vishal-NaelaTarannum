/**
 * Problem Description Given a matrix of m * n elements (m rows, n columns), return allelements of the matrix in spiral order.
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let l = 0;
    let t = 0;
    let r = matrix[0].length
    let b = matrix.length
    size = matrix[0].length * matrix.length
    const res = []
    while (l < r && t < b) {
        //get all the elements in the first row and increment t
        for (let i = l; i < r; i++) {
            res.push(matrix[t][i])
        }
        t += 1
        for (let j = t; j < b; j++) {
            res.push(matrix[j][r - 1])
        }
        r = r - 1
        if (size == res.length) {
            break;
        }
        for (let i = r - 1; i > l - 1; i--) {
            res.push(matrix[b - 1][i])
        }
        b = b - 1
        for (let i = b - 1; i > t - 1; i--) {
            res.push(matrix[i][l])
        }
        l = l + 1

    }
    return res
};

console.log(spiralOrder[[[1, 2, 3], [4, 5, 6], [7, 8, 9]]])