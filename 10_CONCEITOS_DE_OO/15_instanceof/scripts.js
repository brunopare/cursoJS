class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }

  latir() {
    console.log("Au au");
  }
}

let pug = new Cachorro(4, "Pug");

console.log(pug.patas);

pug.latir();

//verifica se o cachorro é herança do mamifero
console.log(new Cachorro instanceof Mamifero);

console.log(coiote instanceof Mamifero);
// como retorna valores booleanos podemos coloca-los em estruturas de controle