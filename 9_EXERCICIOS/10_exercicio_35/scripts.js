const calculadora = {
  soma: function(a,b){
    return a+b;
  },
  subtrair: function(a,b){
    return a-b;
  },
  multiplicar: function(a,b){
    return a*b;
  },
  dividir: function(a,b){
    return a/b;
  }
}

console.log(calculadora.soma(3,4));
console.log(calculadora.subtrair(10,2));
console.log(calculadora.multiplicar(3,4));
console.log(calculadora.dividir(3,4));