import {Car} from './classes/Car.js';
import {Drone} from "./classes/Drone.js";
import {fleet} from "./fleet-data.js";
import {FleetDataService} from "./services/fleetDataService.js";


let dataService = new FleetDataService();
dataService.loadData(fleet);
for(let car of dataService.cars){
    console.log(car.license);
}
for(let drone of dataService.drones){
    console.log(drone.license);
}
for(let e of dataService.errors){
    console.log(e.message, e.data);
}