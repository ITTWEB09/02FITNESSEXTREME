import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'Login',
    template: `
    <h2> Login </h2>
    
        <div>
            <label>Username:</label>
            <input type="text" id="username" [(ngModel)] = "username"/>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" id="password" [(ngModel)] = "password"/>
        </div>
        <div>
            <button type="button" (click)="login()">
            Login
            </button>
        </div>
    
    `,
    providers: [HttpService]
})
export class LoginComponent {
    constructor(private httpService: HttpService, private _router: Router) {}
    username: string;
    password: string;
    token: string;

    login() {
        if(!this.username || !this.password) {
            console.log("Username or password not set!");
            return;
        }

        this.httpService.doLogin(this.username, this.password).subscribe(
            res => {
                this.token = res.text();
                this.createCookie(this.token, 1);
                this._router.navigateByUrl('/');
            },
            err => console.log("An error occured : " + err)
        );
    }

    createCookie(value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = "myToken=" + value + expires + "; path=/";
    }
}