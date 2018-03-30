import $ from 'jquery';
import {FleetDataService} from "./services/fleet-data-service.js";
import {fleet} from "./fleet-data.js";
import {ApplicationBase} from "./framework/application-base.js";

class App extends ApplicationBase{
    constructor(){
        super('Fleet App');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);
        console.log(fleet);
    }
}

export let application = new App();
application.show($('body'));

