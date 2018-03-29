'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Drone = function Drone(id, name) {
    _classCallCheck(this, Drone);

    console.log('ID: ' + id + ' name: ' + name);
};

var drone = new Drone('A123', 'Flyer');
console.log(drone instanceof Drone);
//# sourceMappingURL=app.js.map