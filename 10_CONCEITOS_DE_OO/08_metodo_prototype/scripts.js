function Cachorro(raca,patas,cor){
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}

Cachorro.prototype.uivar = function(){
  console.log("auuuuuuu");
}

Cachorro.prototype.latir = function(){
  console.log("auau");
}
let cachorro = new Cachorro('Husky', 4,'Preto');
cachorro.uivar();
cachorro.latir();