import { Observable } from "tns-core-modules/data/observable";

import { SelectedPageService } from "../shared/selected-page-service";

export class HomeViewModel extends Observable {

    items: Object[];

    constructor() {
        super();

        this.items = [
            {
                name: 'test',
            },
            {
                name: 'Avril Lavigne'
            },
            {
                name: 'test',
            },{
                name: 'test',
            },{
                name: 'test',
            },{
                name: 'test',
            },{
                name: 'test',
            },{
                name: 'test',
            },{
                name: 'test',
            },{
                name: 'test',
            },{
                name: 'test',
            }
        ];

        SelectedPageService.getInstance().updateSelectedPage("Home");
    }
}
