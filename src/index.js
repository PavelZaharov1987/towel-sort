
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!Array.isArray(matrix) || matrix.length == 0) {
        return [];
    } else {
        for (let i = 1; i < matrix.length; i+=2) {
            matrix[i].reverse();
        }
        let result = matrix.reduce((a, b) => {
            return a.concat(b);
        })
        return result;
    }
}
