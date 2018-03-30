import {Car} from './classes/Car.js';
import {Drone} from "./classes/Drone.js";
import {fleet} from "./fleet-data.js";
import {FleetDataService} from "./services/fleetDataService.js";


let dataService = new FleetDataService();
dataService.loadData(fleet);

//let car = dataService.getCarByLicense('AT2020');

//let cars = dataService.getCarsSortedByLicense();

let cars = dataService.filterCarsByMake('e');

for (let car of cars) {
    console.log(car.make);
}
