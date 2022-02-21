for (let x = 10; x>0; x-=1){
  if(x%2==0){
    console.log("Caiu no continue");
    continue;
  }
  console.log(x);
}