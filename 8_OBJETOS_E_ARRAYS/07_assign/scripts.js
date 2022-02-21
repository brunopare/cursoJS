let objetoA ={
  prop1: 'Teste',
  prop2: 'Teste2'
};

let objetoB = {
  prop3: 'programador'
};

Object.assign(objetoA, objetoB);
console.log(objetoA);

let carro = {
  portas: 2,
  portamalas: "200l",
  motor: '2.0'
};

let adicionais = {
  tetosolar: true,
  arCondicionado: true,
};

console.log(carro);
Object.assign(carro, adicionais);
console.log(carro);

// Além dos valores que ele ja possuia.
// O objeto A agora tem os valores do objeto B.