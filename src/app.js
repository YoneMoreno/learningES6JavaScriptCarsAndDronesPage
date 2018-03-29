class Drone {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let drone = new Drone('A123', 'Flyer');
console.log(drone + ' ID: ' + drone.id + ' name: ' + drone.name);