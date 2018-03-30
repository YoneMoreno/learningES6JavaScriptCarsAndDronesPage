class Vehicle{
    start(){
        console.log('starting vehicle');
    }
}

class Car extends Vehicle{

}
let c = new Car();
c.start();