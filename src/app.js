class Vehicle{
    start(){
        console.log('starting vehicle');
    }
}

class Car extends Vehicle{
    start(){
        console.log('STARTING car');
    }
}
let c = new Car();
c.start();