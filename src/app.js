import {Button} from './ui/button.js';
import {Image} from "./ui/image.js";
import {TitleBar} from "./ui/title-bar.js";


import {DataTable} from "./ui/data-table.js";
import {FleetDataService} from "./services/fleet-data-service.js";
import {fleet} from "./fleet-data.js";
import {GoogleMaps} from "./ui/google-maps.js";


let dataService = new FleetDataService();
dataService.loadData(fleet);
console.log(fleet);

let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMaps(centerOfMap, dataService.cars);
map.appendToElement($('body'));