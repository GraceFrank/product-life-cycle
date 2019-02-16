var TrafficLight = function () {
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
 
var Producer = function (light) {
    this.light = light;
 
    this.go = function () {
        console.log(`producer produced`);
        light.change(new Retailer(light));
    }
};
 
var Retailer = function (light) {
    this.light = light;
 
    this.go = function () {
        console.log(`Retailer`)
        light.change(new Consumer(light));
    }
};
 
var Consumer = function (light) {
    this.light = light;
 
    this.go = function () {
        console.log(`Consumer`);
        light.change(new Recycler(light));
    }
};
var Recycler = function (light) {
    this.light = light;
 
    this.go = function () {
        console.log(`Recycler`);
        light.change(new Producer(light));
    }
};

function run() {
    var light = new TrafficLight();
    light.start();
 
    
}

run();
