// concat une duas arrays
const zeero = 0;
const postiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, postiveNumbers);

// Funções de interação
function isEven(x){
    // devolve true se x for múltiplo de 2.
    console.log(x);
    return x % 2 === 0 ? true : false;
}


let numbersOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Método every
/**
 * Ele intera pelo elementos do array, até que a função devolva um false,
 * 
*/
numbers.every(isEven);
