import {Button} from './ui/button.js';
import {Image} from "./ui/image.js";
import {TitleBar} from "./ui/title-bar.js";


import {DataTable} from "./ui/data-table.js";
import {FleetDataService} from "./services/fleet-data-service.js";
import {fleet} from "./fleet-data.js";

let headers = "License Make Model Miles".split(" ");
let dataService = new FleetDataService();
dataService.loadData(fleet);
console.log(fleet);
let dt = new DataTable(headers, dataService.cars);

dt.appendToElement($('body'));



/*let titleBar = new TitleBar('App');
titleBar.addLink('Home', '');
titleBar.addLink('Cars', '');
titleBar.addLink('Drones', '');
titleBar.addLink('Map', '');
titleBar.appendToElement($('body'));*/

/*let b = new Button('Click me');
b.appendToElement($('body'));

let image = new Image('../images/drone.jpg');
image.appendToElement($('body'));*/
