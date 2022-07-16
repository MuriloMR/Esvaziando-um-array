// Esvaziando um array
let numero [1,2,3,4,5,6];
let outros = numeros;

//solução 1
//numeros = [];
//console.log(outros);

//Solução 2 
//numeros.length = 0;
//console.log(numeros);
//console.log(outros);

//Solução 3
numeros.splice(0, numeros.length);
console.log(numeros);
console.log(outros);


