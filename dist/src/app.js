'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Drone = function () {
    function Drone(id) {
        _classCallCheck(this, Drone);

        this._id = id;
    }

    _createClass(Drone, [{
        key: 'id',
        get: function get() {
            return this._id;
        },
        set: function set(value) {
            this._id = value;
        }
    }]);

    return Drone;
}();

var drone = new Drone('A1');
drone.id = '>Z9';
console.log('ID: ' + drone.id);
//# sourceMappingURL=app.js.map