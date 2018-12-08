import {Component, Input, OnInit} from '@angular/core';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {Candidate} from '../../models/candidate.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    opened = true;
    over = 'side';
    watcher: Subscription;

    user: {};

    constructor(media: ObservableMedia) {
        this.watcher = media.subscribe((change: MediaChange) => {
            if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
                this.opened = false;
                this.over = 'over';
            } else {
                this.opened = true;
                this.over = 'side';
            }
        });
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    }
}
