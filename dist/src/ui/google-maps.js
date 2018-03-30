'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleMaps = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _baseElement = require('./baseElement.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleMaps = exports.GoogleMaps = function (_BaseElement) {
    _inherits(GoogleMaps, _BaseElement);

    function GoogleMaps(centerOfMap, data) {
        _classCallCheck(this, GoogleMaps);

        var _this = _possibleConstructorReturn(this, (GoogleMaps.__proto__ || Object.getPrototypeOf(GoogleMaps)).call(this));

        _this.centerOfMap = centerOfMap;
        _this.data = data;
        return _this;
    }

    _createClass(GoogleMaps, [{
        key: 'createElement',
        value: function createElement() {
            var _this2 = this;

            _get(GoogleMaps.prototype.__proto__ || Object.getPrototypeOf(GoogleMaps.prototype), 'createElement', this).call(this);

            setTimeout(function () {
                var map = new window.google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: _this2.centerOfMap
                });

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _this2.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var vehicle = _step.value;

                        var _vehicle$latLong$spli = vehicle.latLong.split(' '),
                            _vehicle$latLong$spli2 = _slicedToArray(_vehicle$latLong$spli, 2),
                            lat = _vehicle$latLong$spli2[0],
                            long = _vehicle$latLong$spli2[1];

                        console.log('lat: ' + lat);
                        var myLatLng = new window.google.maps.LatLng(lat, long);

                        var marker = new window.google.maps.Marker({
                            position: myLatLng,
                            map: map
                        });

                        marker.setMap(map);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }, 0);
        }
    }, {
        key: 'getElementString',
        value: function getElementString() {
            return '<div style="width:800px; height:400px" id="map"></div>';
        }
    }]);

    return GoogleMaps;
}(_baseElement.BaseElement);
//# sourceMappingURL=google-maps.js.map