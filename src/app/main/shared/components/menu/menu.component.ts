import {Component, Input, OnInit} from '@angular/core';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public opened = true;
    public over = 'side';
    public watcher: Subscription;

    public user: {};

    constructor(media: ObservableMedia, private router: Router) {
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

    onLogout() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}
