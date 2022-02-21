class Carrinho  {
  constructor (itens, qtd, valor){
    this.itens = itens;
    this.qtd = qtd;
    this.valor = valor;
  }
// adiciona item 
   addItem(item){

    let contador = 0;

    for(let itemCarrinho in this.itens){
      if(this.itens[itemCarrinho].id == item.id){ // se o item adicionado ja existe na lista de itens
        this.itens[itemCarrinho].qtd += item.qtd; //adiciona a quantidade de item
        contador = 1;
      }
    }
    //caso não seja um item que ja exista na lista ele vai adicionar o item completo (id,nome,preco)
    if(contador == 0){
      this.itens.push(item)
    }
    this.qtd += item.qtd; 
    this.valor += item.preco * item.qtd;
  }

  removeItem(item){
    for(let itemCarrinho in this.itens){
      if(this.itens[itemCarrinho].id == item.id){
         let obj = this.itens[itemCarrinho];
         let index = this.itens.findIndex(function(obj) {return obj.id ==item.id}); 
         this.qtd -= this.itens[itemCarrinho].qtd; 
         this.valor -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
         
         this.itens.splice(index, 1);

         
      }

    }
  }
}

let carrinho = new Carrinho([
  {
    id: 01,
    nome: "camisa",
    qtd: 1,
    preco: 20
  },
  {
    id: 02,
    nome: "calça",
    qtd: 2,
    preco: 50
  }
], 3, 120);

console.log(carrinho);
carrinho.addItem({id: 01, nome:"camisa", qtd:2, preco: 20});
carrinho.addItem({id: 03, nome:"boné", qtd:1, preco: 15});
carrinho.removeItem({id: 01, nome:"camisa", qtd:1});

console.log(carrinho);