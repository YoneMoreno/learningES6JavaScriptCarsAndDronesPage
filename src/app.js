class Vehicle{
    constructor(){
        this.gpsEnabled = true;
    }
}

class Drone extends Vehicle{

}
class Car extends Vehicle{
    constructor() {
        super();
    }
}
let c = new Car();
console.log(c.gpsEnabled);