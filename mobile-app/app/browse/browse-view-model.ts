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
                image: 'https://pbs.twimg.com/profile_images/700004630625914880/32kGHYJw_400x400.jpg'
            },
            {
                name: 'Imagine Dragons',
                place: 'Top 2 artist',
                image: 'https://a.wattpad.com/useravatar/imaginedragonsdaily.256.519666.jpg'
            },
            {
                name: 'Avril Lavigne',
                place: 'Top 3 artist',
                image: 'https://c-sf.smule.com/sf/s35/arr/28/b7/7293109b-b4c9-49e4-9e35-dc8cc7edee63.jpg'
            },
            {
                name: 'Justin Bieber',
                place: 'Top 4 artist',
                image: 'https://s3.amazonaws.com/media.muckrack.com/profile/images/5424192/justin.jpg.256x256_q100_crop-smart.jpg'
            },
            {
                name: 'Drake',
                place: 'Top 5 artist',
                image: 'https://cms.algoafm.co.za/img/or_201662983144.jpeg'
            },
            {
                name: 'RadioHead',
                place: 'Top 6 artist',
                image: 'https://cdn141.picsart.com/297212454008201.jpg?c256x256'
            },
            {
                name: 'Linkin Park',
                place: 'Top 7 artist',
                image: 'https://pbs.twimg.com/profile_images/3184197979/fed5b90a33dab86d97c22f7926b9e057.jpeg'
            },
            {
                name: 'Eminem',
                place: 'Top 8 artist',
                image: 'https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_1440,w_1440,x_512,y_0/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1512956943/171210-stereo-eminem-lede-2_pf4tpd'
            },
            {
                name: 'Angèle',
                place: 'Top 9 artist',
                image: 'https://cdn130.picsart.com/295277873020201.jpg?c256x256'
            },
            {
                name: 'Bruno Mars',
                place: 'Top 10 artist',
                image: 'https://pbs.twimg.com/profile_images/707924899751403521/yPK2LApI_400x400.jpg'
            }
        ];

        SelectedPageService.getInstance().updateSelectedPage("Browse");
    }
}
