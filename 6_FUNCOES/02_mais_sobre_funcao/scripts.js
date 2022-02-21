function multiplica(x,y,z){
    return x*y*z;
}

console.log(multiplica(2,3,4));

const mult = multiplica(5,4,8);
console.log(mult);

function podeDirigir(idade, cnh){
    if (idade >=18 && cnh == true){
      console.log("Pode dirigir");
    }else{
      console.log("Não pode dirigir");
    }
}

podeDirigir(18,true);
podeDirigir(18,false);