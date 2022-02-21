// só deixa o código prosseguir se o não ouver erro no throw 
let arr = [1,2,3,4,5];
let arr2 = [];
function iteraArray(arr){
  if(arr.length == 0){
    throw new Error("O array precisa ter pelo menos um elemtno");
  }else {
    for(let i=0; i<arr.length; i++){
      console.log(i);
    }
  }
}

function arrayVazio(arr){
  if(arr.length){
    throw new Error("O array precisa ter 0 elementos")
  }else{
    console.log("agora foi");
  }
}

iteraArray(arr);
//iteraArray(arr2);

arrayVazio(arr);
