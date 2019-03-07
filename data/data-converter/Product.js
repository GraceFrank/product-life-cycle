//product class is used to create a new product, name is name of product, an id is given for each product, and stage refers to the current stage a product is in the cycle
class Product {
  constructor(name, id, stage = "Producer") {
    this.name = name;
    this.productNo = id;
    this.stage = stage;
  }
}

module.exports = Product;
