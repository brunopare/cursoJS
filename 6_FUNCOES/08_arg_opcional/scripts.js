function soma(a,b){
  if(a == undefined || b == undefined){
    console.log("Essa função precisa dos dois argumentos!");
  }else{
    return a + b;
  }
}

soma(2);
console.log(soma(2,1));

function saudacao(nome,idade) {
  if(idade==undefined){
    console.log(`Olá ${nome}`);
  }else{
    console.log(`Olá ${nome}, você tem ${idade} anos`);
  }
}

saudacao("Bruno");
saudacao("Bruno", 24);