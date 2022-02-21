let pessoa = {
  nome: "Bruno",
  idade: 24,
  profissão: "Estagiário"
}

console.log(pessoa);
console.log(pessoa.nome);

delete pessoa.nome;
console.log(pessoa);

pessoa.casado = false;
pessoa.nome = "Bruno";

console.log(pessoa);