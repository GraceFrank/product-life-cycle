class Product {
  constructor(name, id, stage = "Producer") {
    this.name = name;
    this.productNo = id;
    this.stage = stage;
  }
}

module.exports = Product;
