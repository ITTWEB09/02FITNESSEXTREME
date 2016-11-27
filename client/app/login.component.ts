import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'Login',
    template: `
    <h2> Login </h2>
    <form>
        <div>
            <label>Username:</label>
            <input type="text" id="username" [ngModel]="username"/>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" id="password" [ngModel]="password"/>
        </div>
        <div>
            <button type="button" (click)="login()">
            Login
            </button>
        </div>
    </form>
    `,
    providers: [HttpService]
})
export class LoginComponent {
    constructor(private httpService: HttpService) {}
    username: string;
    password: string;

    token: string;
    errorMessage: any;

    login(username, password) {
        if(!username || !password) {
            return;
        }
        this.httpService.doLogin(username, password)
                        .then(
                            token => this.token = token,
                            error => this.errorMessage = <any>error
                        );
    }
}