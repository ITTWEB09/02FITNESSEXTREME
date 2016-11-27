import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'Login',
    template: '<p>Logging out...</p>'
})
export class LogoutComponent implements OnInit {
    constructor(private _router: Router) {}

    // Source: http://stackoverflow.com/questions/2144386/javascript-delete-cookie
    private deleteCookie() {
        var date = new Date();
        date.setTime(date.getTime() - 1);
        var expires = "; expires=" + date.toUTCString();

        document.cookie = "myToken=" + expires + "; path=/";
    }

    ngOnInit() {
        this.deleteCookie();
        this._router.navigateByUrl('/');
    }
}