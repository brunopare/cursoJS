//Cria intervalos entre [] 

const conjunto = /[12345]/; 

console.log(conjunto.test(6)); //retorna falso 

console.log(conjunto.test(2)); // retorna true  

console.log(conjunto.test(23)); // retorna true, pq tem o 2 e o 3 na lista

console.log(conjunto.test(26)); // retorna true pq 26 esta emtre 12345 (doze mil trezentos e quarenta e cinco)

console.log(conjunto.test(60)); // retorna false pq ele nao enxerga números que começam com números que não estao na lista

//agora temos invervalos

let conjunto2 = /[0-9]/ //de zero a 9
console.log(conjunto2.test("65")); //retorna true pq tem o 6 e o 5 dentro desse conjunto 




