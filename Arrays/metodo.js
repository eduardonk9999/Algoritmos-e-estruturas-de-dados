// Para remover um elemento do inicio do Array use o método shift

let numbers = [1, 2, 4, 6, 90]

numbers.shift();



// O método slice, pode remover um elemento de uma posição especifica do array;
numbers.slice(2, 1); // Esse código vai remover 1 elemento apartir do indice 2...

// o splice tem a mesma logica do slice, a diferença é que ele adciona elementos:
numbers.splice(2, 1, 2, 3);



