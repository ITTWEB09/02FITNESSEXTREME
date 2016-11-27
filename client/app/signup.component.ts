import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'Signup',
    template: `
    <h2> Signup </h2>
    
        <div>
            <label>Username:</label>
            <input type="text" id="username" [(ngModel)] = "username"/>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" id="password" [(ngModel)] = "password"/>
        </div>
        <div>
            <button type="button" (click)="signup()">
            Signup
            </button>
        </div>
    
    `,
    providers: [HttpService]
})
export class SignupComponent {
    constructor(private httpService: HttpService, private _router: Router) {}
    username: string;
    password: string;

    signup() {
        if(!this.username || !this.password) {
            console.log("Username or password not set!");
            return;
        }

        this.httpService.signup(this.username, this.password).subscribe(
            res => {
                this._router.navigateByUrl('/login');
            },
            err => console.log("An error occured : " + err)
        );
    }
}