class Vehicle{
    start(){
        console.log('starting vehicle');
    }
}

class Car extends Vehicle{
    start(){
        console.log('STARTING car');
        super.start();
    }
}
let c = new Car();
c.start();