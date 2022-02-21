class Cachorro {
  constructor(raca,cor){
    this.raca = raca;
    this.cor = cor;
  }
  latir(){
    console.log("auau");
  }
  get getCor(){
    return this.cor;
  }
  set setCor(cor){
    this.cor = cor;
  }
}


let pastor = new Cachorro('Pastor Alemão', 'Sem cor');
console.log(pastor);

//setando a cor
pastor.setCor = "Marrom";
//pegando a cor
console.log(pastor.getCor);
