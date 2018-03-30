class Vehicle{
}

class Drone extends Vehicle{

}
class Car extends Vehicle{
    constructor() {
        console.log('constructing car');
    }
}
let c = new Car();