'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Drone = function Drone(id, name) {
    _classCallCheck(this, Drone);

    this.id = id;
    this.name = name;
};

Drone.maxHeight = 2000;

var drone = new Drone('A123', 'Flyer');
var drone2 = new Drone('B456', 'Sinsajo');
console.log(drone.id + '  ' + drone2.id);
console.log(Drone.maxHeight);
//# sourceMappingURL=app.js.map