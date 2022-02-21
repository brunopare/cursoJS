let nomes = ["Bruno", "Pedro", "João", "Carlos"];


nomes.forEach(nome => {
  if (nome == "Bruno"){
    console.log("Olá Bruno! Você está na lista")
  }else{
    console.log("Não é o Bruno")
  }
})

if(nomes.includes("Bruno")){
  console.log("Poderia ter feito com o includes burro!")
}