class Drone {
    constructor(id) {
        this._id = id;
    }
    get id(){
        return this._id;
    }
    set id(value){
        this._id = value;
    }
}

let drone = new Drone('A1');
drone.id = '>Z9';
console.log('ID: ' + drone.id);

