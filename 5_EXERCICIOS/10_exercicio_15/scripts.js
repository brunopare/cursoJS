let num = 41;
let div = 0;

for (let x = 1; x<=num; x++){
    if(num % x == 0){
      div++;
    }
}

if (div==2){
  console.log(`O número ${num} é primo`);
}
else{
  console.log(`O número ${num} não é primo`)
}