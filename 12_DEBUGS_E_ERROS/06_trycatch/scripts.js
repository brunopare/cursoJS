//let b = 2; 

try{ //tenta executar o bloco a baixo 
  let a = 2+b;
}catch(erro){//caso de erro retorna o erro sem quebrar o programa
  console.log(erro);
}
// mesmo com erro o programa contiua rodando
console.log('teste');