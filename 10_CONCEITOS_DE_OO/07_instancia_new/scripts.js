function Cachorro(raca,pata,cor){
  this.raca = raca;
  this.pata = pata;
  this.cor = cor; 
  this.uivar = function(){
    console.log("auuuuuuu")
  }
}

let husk = new Cachorro();// podemos passar os parâmetros aqui dentro ou da fomra a baixo.
husk.pata = 4;
husk.cor = "preta";
husk.raca = "Husky";
console.log(husk.pata + " " + husk.cor + " " + husk.raca);
husk.uivar();