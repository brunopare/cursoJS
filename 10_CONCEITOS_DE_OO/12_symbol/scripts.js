class Cachorro {
  constructor(raca, cor){
    this.raca = raca;
    this.cor = cor;
  }

  latir(){
    console.log("auau");
  }
}

Cachorro.prototype.raca = "SRD";

//Criando o symbol
let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');


labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

//acessando o symbol
console.log(Cachorro.prototype[patas]);
//acessando as patas do labrador 
console.log(labrador[patas]);