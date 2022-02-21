let pessoa = {
  "nome": "Bruno",
  "idade": 28,
  "profissão": "Programador",
  "hobbies": ["video game", "bike", "dormir"]
}

let pessoaTexto = JSON.stringify(pessoa); // converte o json para string
console.log(pessoaTexto);
//console.log(pessoa);

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);

console.log(pessoaJson.hobbies[0]);