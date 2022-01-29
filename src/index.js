// You should implement your task here.

// module.exports = function towelSort(matrix) {
//     let array = [];
//     for (i = 0; i < matrix.length; i++) {
//         for (j = 0; j < matrix[i].length; j++) {
//             let indexJ = i % 2 === 0 ? j : matrix[i].length - 1 - j;
//             if (matrix) {
//                 array.push(matrix[i][indexJ]);
//                 return array;
//             } else {
//                 return array;
//             }
//         }
//     }
// };

module.exports = function towelSort(matrix) {
    let array = [];
    if (matrix) {
        for (i = 0; i < matrix.length; i++) {
            i % 2 === 0
                ? array.push(matrix[i])
                : array.push(matrix[i].sort((a, b) => b - a));
        }
    }
    return array.flat();
};
