class Product {
  constructor(name, id, stage = "Producer") {
    this.name = name;
    this.productNo = id;
    this.stage = ()=>{
      switch(stage){
        case /recycler/i :
          return 'Recycler';
      }
    };
  }
}

switch(stage){
  case /Recycler/i :
    return 'Recycler';
    break;
  case //
}

module.exports = Product;
