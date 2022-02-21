const reg1 = new RegExp('bola'); //cria o padrão a ser procurado, no caso bola

console.log(reg1.test("bola")); //vai retornar true
console.log(reg1.test("teste")); //retorna falso  


const reg2 = /bola/;


console.log(reg2.test("bola")); //vai retornar true
console.log(reg2.test("teste")); //retorna falso  

//podemos fazer o teste em uma variável

texto = "tem bola na variavel";
console.log(reg2.test(texto));

//podemos fazer diretamente na linha de código

console.log(/quadrado/.test("tem quadrado? ")); //retorna true 
console.log(/quadrado/.test("teasdasquadradoasdadasd"))//retorna true pq tem a palavra "quadrado"