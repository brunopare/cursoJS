class contaBanco {
  constructor(saldo){
    this.saldo = saldo; 
  }
  saque(valor){
    this.saldo -= valor;
  }
  deposito(valor){
    this.saldo +=valor; 
  }
  get consultaSaldo(){
    return this.saldo;
  }
}

let banco = new contaBanco(400);


banco.deposito(350);
console.log(`O saldo atual da conta é de  ${banco.consultaSaldo}`);
banco.saque(200);
console.log(`O saldo atual da conta é de ${banco.consultaSaldo}`);