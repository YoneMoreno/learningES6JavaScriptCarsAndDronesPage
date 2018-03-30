import {Button} from './ui/button.js';
import {Image} from "./ui/image.js";
import {TitleBar} from "./ui/title-bar.js";

let titleBar = new TitleBar('App');
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
