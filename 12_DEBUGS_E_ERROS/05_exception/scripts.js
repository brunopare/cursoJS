function saudacao(nome){
  if(typeof nome != 'string') {
    throw new Error("Parametro nome precisa ser uma string");
  }else{
    console.log(`Olá ${nome}`);
  }
}

saudacao("Bruno");
saudacao(541);

console.log("teste");
