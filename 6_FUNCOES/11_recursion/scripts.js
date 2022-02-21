function retornaNumeroPar(n){
  if(n % 2 == 0){
    console.log("n aogra é par: " + n);
  }else{
    console.log(n);
    retornaNumeroPar(n-1);
  }
}

retornaNumeroPar(33);

function recursao (n){
  if(n - 1 < 2){
    console.log("recursão parou: "+n);
  }else if (n%2 !=0){
    console.log("Número ímpar: "+n);
    recursao(n-1);
  }else{
    console.log("Número par: "+n);
    recursao(n-2);
   }
}

recursao(39);
recursao(10);
recursao(55);