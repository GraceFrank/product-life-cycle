var Product = function () {
    var count = 0;
    var currentState = new Producer(this);
 
    this.change = function (state) {
        // limits number of changes
        if (count++ >= 10) return;
        currentState = state;
        currentState.go();
    };
 
    this.start = function () {
        currentState.go();
    };
}
 
var Producer = function (stage) {
    this.stage = stage;
 
    this.go = function () {
        console.log(`producer produced`);
        stage.change(new Retailer(stage));
    }
};
 
var Retailer = function (stage) {
    this.stage = stage;
 
    this.go = function () {
        console.log(`Retailer`)
        stage.change(new Consumer(stage));
    }
};
 
var Consumer = function (stage) {
    this.stage = stage;
 
    this.go = function () {
        console.log(`Consumer`);
        stage.change(new Recycler(stage));
    }
};
var Recycler = function (stage) {
    this.stage = stage;
 
    this.go = function () {
        console.log(`Recycler`);
    }
};

function run() {
    var kim = new Product();
    kim.start();
 
    
}

run();