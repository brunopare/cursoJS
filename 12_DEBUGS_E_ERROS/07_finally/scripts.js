let b = 2;

try {

  let a = 2 + b;

} catch(e) {

  console.log(e);

} finally { //executa o código a baixo mesmo se ouver erro. 

  console.log("Executou");

}

// console.log('teste');