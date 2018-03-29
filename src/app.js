class Drone {
    constructor(id, name) {
        console.log('ID: ' + id + ' name: ' + name);
    }
}

let drone = new Drone('A123', 'Flyer');
console.log(drone instanceof Drone);