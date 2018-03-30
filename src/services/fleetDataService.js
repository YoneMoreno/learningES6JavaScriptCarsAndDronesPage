import {Car} from "../classes/Car.js";
import {Drone} from "../classes/Drone.js";
import {DataError} from "./DataError.js";

export class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    getCarByLicense(license){
        return this.cars.find(function(car){
            return car.license === license;
        });
    }

    getCarsSortedByLicense(){
        return this.cars.sort(function(car1,car2){
            if(car1.license < car2.license){
                return -1;
            }
            if(car1.license > car2.license){
                return 1;
            }
            return 0;
        });
    }

    filterCarsByMake(filter){
        return this.cars.filter( car => car.make.indexOf(filter) >= 0)
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    if (this.validateCarData(data)) {
                        let car = this.loadCar(data);
                        if (car) {
                            this.cars.push(car);
                        }
                    } else {
                        let e = new DataError('Car data is not valid', data);
                        this.errors.push(e);
                    }
                    break;
                case 'drone':
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
                default:
                    let e = new DataError('invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.make = car.make;
            c.miles = car.miles;
            return c;
        } catch (e) {
            this.errors.push(new DataError('error loading car', e));
        }
        return null;
    }

    validateCarData(car) {
        let requiredProps = 'license make model miles latLong'.split(' ');
        let hasErrors = false;

        for (let field of requiredProps) {
            if (!car[field]) {
                this.errors.push(new DataError(`invalid field of car: ${field}`, car));
                hasErrors = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new DataError('miles is not a number', car));
            hasErrors = true;
        }

        return !hasErrors;
    }

    loadDrone(drone) {
        try {
            let d = new Drone(drone.license, drone.model, drone.latLong);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            return d;
        } catch (e) {
            this.errors.push(new DataError('error loading drones', e));
        }
        return null;
    }
}