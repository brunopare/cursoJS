class Mamifero {
  constructor(patas){
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);
console.log(coiote.patas);
//cachorro obteve a herança do mamifero
class Cachorro extends Mamifero{
  constructor(patas,raca){
    //alteração no objeto pai Mamifero
    super(patas,patas);
    //alteração no objeto Cachorro
    this.raca = raca;
  }
  latir(){
    console.log("auauau");
  }
}

let pug = new Cachorro(4,'Pug')
pug.latir();