import { Observable } from "tns-core-modules/data/observable";

import { SelectedPageService } from "../shared/selected-page-service";

export class BrowseViewModel extends Observable {
    items: Object[];

    constructor() {
        super();

        this.items = [
            {
                name: 'Green Day',
                place: 'Top 1 artist',
                image: '~/images/artists/gd.jpg'
            },
            {
                name: 'Imagine Dragons',
                place: 'Top 2 artist',
                image: '~/images/artists/id.jpg'
            },
            {
                name: 'Avril Lavigne',
                place: 'Top 3 artist',
                image: '~/images/artists/avril.jpg'
            },
            {
                name: 'Justin Bieber',
                place: 'Top 4 artist',
                image: '~/images/artists/jb.jpg'
            },
            {
                name: 'Drake',
                place: 'Top 5 artist',
                image: '~/images/artists/drake.jpg'
            },
            {
                name: 'RadioHead',
                place: 'Top 6 artist',
                image: '~/images/artists/radiohead.jpg'
            },
            {
                name: 'Linkin Park',
                place: 'Top 7 artist',
                image: '~/images/artists/lp.jpg'
            },
            {
                name: 'Eminem',
                place: 'Top 8 artist',
                image: '~/images/artists/eminem.jpg'
            },
            {
                name: 'Angèle',
                place: 'Top 9 artist',
                image: '~/images/artists/angele.jpg'
            },
            {
                name: 'Bruno Mars',
                place: 'Top 10 artist',
                image: '~/images/artists/bm.jpg'
            }
        ];

        SelectedPageService.getInstance().updateSelectedPage("Browse");
    }
}
