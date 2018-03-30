'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function () {
    function Vehicle() {
        _classCallCheck(this, Vehicle);
    }

    _createClass(Vehicle, [{
        key: 'start',
        value: function start() {
            console.log('starting vehicle');
        }
    }], [{
        key: 'getCompanyName',
        value: function getCompanyName() {
            console.log('My company');
        }
    }]);

    return Vehicle;
}();

var Car = function (_Vehicle) {
    _inherits(Car, _Vehicle);

    function Car() {
        _classCallCheck(this, Car);

        return _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).apply(this, arguments));
    }

    _createClass(Car, [{
        key: 'start',
        value: function start() {
            console.log('STARTING car');
            _get(Car.prototype.__proto__ || Object.getPrototypeOf(Car.prototype), 'start', this).call(this);
        }
    }], [{
        key: 'getCompanyName',
        value: function getCompanyName() {
            _get(Car.__proto__ || Object.getPrototypeOf(Car), 'getCompanyName', this).call(this);
            console.log('CAR company');
        }
    }]);

    return Car;
}(Vehicle);

var c = new Car();
Car.getCompanyName();
//# sourceMappingURL=app.js.map