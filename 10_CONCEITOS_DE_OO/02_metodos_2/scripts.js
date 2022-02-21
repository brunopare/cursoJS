const cachorro = {
  raca: "SRD",
  uivar: function(){
    console.log("Auuuuuu");
  },
  rosnar: function(){
    console.log("grrrrr")
  },
  setRaca: function(raca){
    this.raca=raca; // seria o mesmo que cachorro.raca = raca 
                    // no caso a funcao recebe a raca do cacorro
  },
  getRaca: function(){
    return "A raça é " +this.raca
  }
}

cachorro.uivar();
cachorro.rosnar();
cachorro.setRaca('Pastor alemão');

console.log(cachorro.raca);
console.log(cachorro.getRaca());
cachorro.setRaca("buldogue");
console.log(cachorro.getRaca());