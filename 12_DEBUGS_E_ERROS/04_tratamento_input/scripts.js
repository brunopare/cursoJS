function checarNumero(num){
  let number = Number(num); //converte para o tipo number
  if (Number.isNaN(number)){ //verifica se o número é um NaN, ou seja não é um tipo number
    alert("Por favor, passe só numeros para o programa")
  }else {
    return console.log(number);
  }
}

checarNumero(5);
//checarNumero("teste");


let number = prompt("digite um número: ");

checarNumero(number);