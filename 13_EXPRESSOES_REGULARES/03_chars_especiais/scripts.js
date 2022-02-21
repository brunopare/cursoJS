//aceita todos os caracteres
const pontoRegex = /./;
//Todos vão retornar True
console.log(pontoRegex.test("asda"));
console.log(pontoRegex.test("12321"));
console.log(pontoRegex.test("a+9--**/-/-*/-/-*/sda"));
console.log(pontoRegex.test("1232131"));
console.log(pontoRegex.test("   ASDASD  ADSA"));

const dRegex = /\d/; // mesma coisa que digigtar [0-9];
console.log(" ")
console.log("Dregex")
console.log(dRegex.test("asda"))
console.log(dRegex.test("123123"))
console.log(dRegex.test("asasdasd123123da")) //True pois tem números 
console.log(dRegex.test("4124123"))
console.log(dRegex.test(" ")) //false 

//só aceita expreções sem números  [^0-9] 
const dRegex2 = /\D/;
console.log(" ")
console.log("Dregex2")
console.log(dRegex2.test("asda")) //true
console.log(dRegex2.test(" ")) //true
console.log(dRegex2.test("123")) // false 
console.log(dRegex2.test("asda123123")) //true 

// Só caracteres com espaço, espaço de linha, tabs
const sRegex = /\s/;
console.log(" ")
console.log("Sregex2")
console.log(sRegex.test("asda")) //false
console.log(sRegex.test(" ")) //true
console.log(sRegex.test("123")) // false 
console.log(sRegex.test("asda123123")) //false 

//Só de 0-9 e A-Z
const wRegex = /\w/;
console.log(" ")
console.log("Wregex")
console.log(wRegex.test("asda")) //true
console.log(wRegex.test(" ")) //false
console.log(wRegex.test("123")) // true 
console.log(wRegex.test("asda123123")) //true 

