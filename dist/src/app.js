'use strict';

var _button = require('./ui/button.js');

var _image = require('./ui/image.js');

var b = new _button.Button('Click me');
b.appendToElement($('body'));

var image = new _image.Image('../images/drone.jpg');
image.appendToElement($('body'));
//# sourceMappingURL=app.js.map