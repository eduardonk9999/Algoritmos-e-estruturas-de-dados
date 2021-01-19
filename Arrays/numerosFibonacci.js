const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i = 3; i < 20; i++){
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 1; i < fibonacci.length; i++){
  console.log(fibonacci[i]);
}

// Remover item do arrau na primeira posição
let numbers = [1, 4, 7, 9];
for (let i = 0; i < numbers.length; i++){
  numbers[i] = numbers[i + 1];
}