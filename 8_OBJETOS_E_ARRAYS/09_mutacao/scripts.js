let pessoa = {
  nome: 'Bruno'
}

let pessoa2 = pessoa; 

let pessoa3 = {
  nome: 'Bruno'
};

console.log(pessoa3 == pessoa);
console.log( pessoa3 == pessoa2);

console.log(pessoa === pessoa2);
pessoa2.nome = 'Pedro';
console.log(pessoa);
pessoa.nome = 'Maria';
console.log(pessoa2);