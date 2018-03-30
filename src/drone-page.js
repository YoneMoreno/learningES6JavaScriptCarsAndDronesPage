import {Page} from "./framework/page.js";
import {DataTable} from "./ui/data-table.js";
import {application} from "./app.js";

export class DronePage extends Page{
    constructor(){
        super('Drones!!!');
    }

    createElement(){
        super.createElement();

        let headers = 'License Base Model'.split(' ');
        console.log(application.dataService.drones);
        let table = new DataTable(headers, application.dataService.drones);
        table.appendToElement(this.element);
    }

    getElementString(){
        return `<div style="margin: 20px;"><h3>Drones</h3></div>`;
    }
}