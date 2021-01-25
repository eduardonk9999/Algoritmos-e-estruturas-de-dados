// Matriz é um array bidimensional

let averageTemp = [];
averageTemp[0] = [72, 72, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];


// Interando por Arrays bidimensionais
function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++){
        for (let j = 0; j < myMatrix[i].length; j++){
            console.log(myMatrix[i][j]);
        }
    }
}

printMatrix(averageTemp);


// Arrays Multidimensionais
const matris3x3x3x = [];
for (let i = 0; i < 3; i++){
    matris3x3x3x[i] = []; // Aqui vai ser iniciado cada array
    for (let j = 0; j < 3; j++){
        matris3x3x3x[i][j] = [];
        for(let z = 0; z < 3; z++){
            matris3x3x3x[i][j][z] = i + j + z;
        }
    }
}

