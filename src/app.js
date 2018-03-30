import {Button} from './ui/button.js';
import {Image} from "./ui/image.js";

let b = new Button('Click me');
b.appendToElement($('body'));

let image = new Image('../images/drone.jpg');
image.appendToElement($('body'));