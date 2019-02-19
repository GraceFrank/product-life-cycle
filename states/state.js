const fs = require('fs');
const input = require('../Data/cleanedInput');
const writeToOutput = require('../data/writeFile')



const Product = function (productName, givenStage = Producer) {
    this.productName = productName;
    let currentState = new givenStage(this);
    this.change = function (state) {
        // limits number of changes
        currentState = state;
        currentState.go();
    };
 
    this.start = function () {
        currentState.go();
    };
}
 
const Producer = function (stage) {
    this.stage = stage;
 
    this.go = function () {
        writeToOutput(`producer produced ${stage.productName}\n`);

        console.log(`producer produced ${stage.productName}`);
        stage.change(new Retailer(stage));
    }
};
 
const Retailer = function (stage) {
    this.stage = stage;
 
    this.go = function () {
        writeToOutput( `Retailer bought ${stage.productName}\n`);
        console.log(`Retailer bought ${stage.productName} `)
        stage.change(new Consumer(stage));
    }
};

const Consumer = function (stage) {
    this.stage = stage;
 
    this.go = function () {
        writeToOutput(`Consumer consumes ${stage.productName}\n`);
        console.log(`Consumer consumes ${stage.productName}`);
        stage.change(new Recycler(stage));
    }
};
const Recycler = function (stage) {
    this.stage = stage;
 
    this.go = function () {
        writeToOutput(`Recycler recycled ${stage.productName}\n`);
        console.log(`Recycler recycled ${stage.productName}`);
    }
};

function run(file) {
    const kim = new Product("sweet", Producer);
    kim.start();
    
    for(let i = 1; i< file.length; i++){
        let drink = new Product(`${file[i][0]} ${file[i][1]}`, getStage(file[i][2]))
        drink.start();
    }
    
    
}



function getStage(){
    this.Producer = Producer;
    
    this.Consumer = Consumer;
    
    this.Retailer = Retailer;
    this.Recycler = Recycler;
 
}

run(input);