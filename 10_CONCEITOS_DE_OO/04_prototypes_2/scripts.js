let pessoa = {
  maos: 2,
}

let pessoaNova = Object.create(pessoa); // prototype de pessoaNova é pessoa

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa)

// por mais que pessoaNova não possui mãos, ele acessa o prototype pessoa que possui as mãos 