class Vehicle{
    start(){
        console.log('starting vehicle');
    }
    static getCompanyName(){
        console.log('My company');
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
Car.getCompanyName();