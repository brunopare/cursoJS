
let nums3 = [1,2,3,4,5,6,7,8,9,10,22];
let nums4 = [1,2,3];


function verificaArr(arr){
  if(arr.length >=5){
    console.log("Muitos elementos");
  }else {
    console.log("Poucos elementos");
  }
}

verificaArr(nums3);
verificaArr(nums4);