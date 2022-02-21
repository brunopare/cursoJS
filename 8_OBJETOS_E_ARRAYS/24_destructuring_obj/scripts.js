const person = {
  name: 'jhon',
  lastname: 'Doe'
}

const {name: fname, lastname: lname} = person;

console.log(fname);
console.log(lname);

let obj = {
  rodas: 4,
  portas: 3,
  tetosolar: true,
  motor: 2.0
};

const {rodas: vrodas, portas: vportas, tetosolar: vtetosolar, motor: vmotor} = obj

console.log(vrodas);
console.log(vportas);