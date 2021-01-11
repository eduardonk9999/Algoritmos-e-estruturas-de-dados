/*
Basicamente os módulos são um código JS declarado em arquivos separados.
Podemos importar as funções, as varáveis e as classes de outros arquivos
diretamente no código JS (sem a necessidade de importar vários arquivos no HTML).

*/

import { circleArea, squareArea } from './17-CalcArea';
console.log(circleArea(2));
console.log(squareArea(2));