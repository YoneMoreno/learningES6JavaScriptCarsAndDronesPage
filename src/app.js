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
    static getCompanyName(){
        super.getCompanyName();
        console.log('CAR company');
    }
}
let c = new Car();
Car.getCompanyName();