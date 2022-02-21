function decrementa(num){
  for(let y = num; y>=0; y--){
    if(y % 2==0){
      console.log(`O número ${y} é par`);
    }
  }
}

decrementa(10);
decrementa(15);
