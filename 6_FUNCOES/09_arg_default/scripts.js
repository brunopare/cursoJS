function repetirFrase(frase, n=2){
  for(let x =1; x<=n; x++){
      console.log(frase + " " + x);
  }
}
repetirFrase("Testando", 5);
repetirFrase("Duas vezes");

function potencia(a, b=2){
  return Math.pow(a, b);
}

console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(2,3));