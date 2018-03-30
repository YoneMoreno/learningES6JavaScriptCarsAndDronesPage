class Vehicle{
    constructor(){
        console.log('constructing vehicle');
    }
}

class Drone extends Vehicle{

}
class Car extends Vehicle{

}
let c = new Car();