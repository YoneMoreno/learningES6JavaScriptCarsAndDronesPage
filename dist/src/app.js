"use strict";

var _button = require("./ui/button.js");

var _image = require("./ui/image.js");

var _titleBar = require("./ui/title-bar.js");

var titleBar = new _titleBar.TitleBar('App');
titleBar.addLink('Home', '');
titleBar.addLink('Cars', '');
titleBar.addLink('Drones', '');
titleBar.addLink('Map', '');
titleBar.appendToElement($('body'));

// let b = new Button('Click me');
// b.appendToElement($('body'));
//
// let image = new Image('../images/drone.jpg');
// image.appendToElement($('body'));
//# sourceMappingURL=app.js.map