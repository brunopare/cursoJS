let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
  for(let i = 0; i < args.length; i++){
    console.log(args[i]);
  }
}

imprimirNumeros(num,num1,num2);
console.log("Pause");
imprimirNumeros(num3);
console.log("Pause");
imprimirNumeros(2,3,4,5,12,5,21,5,6,);