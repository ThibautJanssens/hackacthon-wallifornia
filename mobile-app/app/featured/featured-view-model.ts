import { Observable } from "tns-core-modules/data/observable";

import { SelectedPageService } from "../shared/selected-page-service";

export class FeaturedViewModel extends Observable {
    private items: Object[];
    
    constructor() {
        super();
        
        this.items = [
            {
                place: 'Los Angels Sport Arena',
                image: '~/images/venues/la.jpg'
            },
            {
                place: 'Sportpaleis d\'Anvers',
                image: '~/images/venues/sport-paleis.jpg'
            },
            {
                place: 'Madison square garden',
                image: '~/images/venues/madison-square.jpg'
            },
            {
                place: 'Stade de France',
                image: '~/images/venues/stade-france.jpg'
            },
            {
                place: 'Ancienne Belgique',
                image: '~/images/venues/ab.jpg'
            },
            {
                place: 'Fat Bar',
                image: '~/images/venues/fat.jpg'
            },
            {
                place: 'Festival Les Ardentes',
                image: '~/images/venues/ardente.png'
            }
        ];

        SelectedPageService.getInstance().updateSelectedPage("Featured");
    }
}
