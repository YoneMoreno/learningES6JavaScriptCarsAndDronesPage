'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Drone = function Drone(id, name) {
    _classCallCheck(this, Drone);

    this.id = id;
    this.name = name;
};

var drone = new Drone('A123', 'Flyer');
console.log(drone + ' ID: ' + drone.id + ' name: ' + drone.name);
//# sourceMappingURL=app.js.map