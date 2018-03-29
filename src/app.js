class Drone {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static getCompany(){
        console.log('in getCompany');
    }

    fly(){
        console.log('Drone: ' + this.id + ' is flying');
    }
}


let drone = new Drone('A123', 'Flyer');
let drone2 = new Drone('B456', 'Sinsajo');
drone.fly();
drone2.fly();
Drone.getCompany();