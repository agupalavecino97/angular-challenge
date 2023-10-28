import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    url = signal('');

    constructor(private _router: Router) {
      this._router.events.subscribe((routerEvent: any) => {
        this.url.update(val => val = _router.url);
      });
    }
}
