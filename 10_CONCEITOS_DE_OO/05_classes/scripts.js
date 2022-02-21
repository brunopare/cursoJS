let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function(x){
        console.log(x);
    }
}

let labrador = Object.create(cachorro);
labrador.latir();

labrador.raca = "labrador";

console.log(labrador.raca); // labrador
console.log(cachorro.raca); //SRD

let pastorAlemçao = Object.create(cachorro);

pastorAlemçao.latir("teste");

pastorAlemçao.raca = "Pastor Alemão";
console.log(pastorAlemçao.raca);
