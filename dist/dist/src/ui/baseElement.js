'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseElement = undefined;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var BaseElement = exports.BaseElement = function () {
    function BaseElement() {
        _classCallCheck(this, BaseElement);

        this.element = null; //jQuery object
    }

    _createClass(BaseElement, [{
        key: 'appendToElement',
        value: function appendToElement(el) {
            this.createElement();
            el.append(this.element);
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            var s = this.getElementString();
            this.element = (0, _jquery2.default)(s);
        }
    }, {
        key: 'getElementString',
        value: function getElementString() {
            throw 'Please override getElementString() in BaseElement';
        }
    }]);

    return BaseElement;
}();
//# sourceMappingURL=baseElement.js.map
//# sourceMappingURL=baseElement.js.map