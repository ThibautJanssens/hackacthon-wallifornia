import { Observable } from "tns-core-modules/data/observable";

import { SelectedPageService } from "../shared/selected-page-service";

export class SearchViewModel extends Observable {
    private items: Object[];

    constructor() {
        super();
        this.items = [
            {
                name: 'Avril Lavigne',
                image: '~/images/artists/avril.jpg'
            },
            {
                name: 'Justin Bieber',
                image: '~/images/artists/jb.jpg'
            },
            {
                name: 'Drake',
                image: '~/images/artists/drake.jpg'
            },
            {
                name: 'RadioHead',
                image: '~/images/artists/radiohead.jpg'
            },
            {
                name: 'Linkin Park',
                image: '~/images/artists/lp.jpg'
            },
            {
                name: 'Eminem',
                image: '~/images/artists/eminem.jpg'
            },
            {
                name: 'Angèle',
                image: '~/images/artists/angele.jpg'
            },
            {
                name: 'Green Day',
                image: '~/images/artists/gd.jpg'
            },
            {
                name: 'Image Dragons',
                image: '~/images/artists/id.jpg'
            },
            {
                name: 'Bruno Mars',
                image: '~/images/artists/bm.jpg'
            }
        ];

        SelectedPageService.getInstance().updateSelectedPage("Search");
    }
}
