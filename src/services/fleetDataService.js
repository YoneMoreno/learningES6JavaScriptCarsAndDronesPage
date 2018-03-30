import {Car} from "../classes/Car.js";
import {Drone} from "../classes/Drone.js";

export class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    let car = this.loadCar(data);
                    this.cars.push(car);
                    break;
                case 'drone':
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
            }
        }
    }

    loadCar(car) {
        let c = new Car(car.license, car.model, car.latLong);
        c.make = car.make;
        c.miles = car.miles;
        return c;
    }
    loadDrone(drone){
        let d = new Drone(drone.license, drone.model, drone.latLong);
        d.airTimeHours = drone.airTimeHours;
        d.base = drone.base;
        return d;
    }
}