function tipovar(variavel){
  if (typeof(variavel) === 'string'){
    console.log("Este dado é uma string");
  }else if (typeof(variavel) === 'number'){
    console.log("Este dado é um number");
  }else if (typeof(variavel)=== 'boolean'){
    console.log("Este dado é boolean")
  }
}

tipovar(10);
tipovar("10");
tipovar(true);