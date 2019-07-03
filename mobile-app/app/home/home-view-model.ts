import { Observable } from "tns-core-modules/data/observable";

import { SelectedPageService } from "../shared/selected-page-service";

export class HomeViewModel extends Observable {

    private items: Object[];

    constructor() {
        super();

        this.items = [
            {
                name: 'Avril Lavigne',
                place: 'Los Angeles Sport Arena',
                image: '~/images/artists/avril.jpg'
            },
            {
                name: 'Justin Bieber',
                place: 'Sportpaleis d\'Anvers',
                image: '~/images/artists/jb.jpg'
            },
            {
                name: 'Drake',
                place: 'Madison square garden',
                image: '~/images/artists/drake.jpg'
            },
            {
                name: 'RadioHead',
                place: 'Stade de France',
                image: '~/images/artists/radiohead.jpg'
            },
            {
                name: 'Linkin Park',
                place: 'Ancienne Belgique',
                image: '~/images/artists/lp.jpg'
            },
            {
                name: 'Eminem',
                place: 'Fat Bar',
                image: '~/images/artists/eminem.jpg'
            },
            {
                name: 'Angèle',
                place: 'Festival Les Ardentes',
                image: '~/images/artists/angele.jpg'
            }
        ];

        SelectedPageService.getInstance().updateSelectedPage("Home");
    }
}
