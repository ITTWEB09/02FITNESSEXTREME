"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_service_1 = require('./http.service');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(httpService, _router) {
        this.httpService = httpService;
        this._router = _router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.username || !this.password) {
            console.log("Username or password not set!");
            return;
        }
        this.httpService.doLogin(this.username, this.password).subscribe(function (res) {
            _this.token = res.text();
            _this.createCookie(_this.token, 1);
            _this._router.navigateByUrl('/');
        }, function (err) { return console.log("An error occured : " + err); });
    };
    LoginComponent.prototype.createCookie = function (value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = "myToken=" + value + expires + "; path=/";
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'Login',
            template: "\n    <h2> Login </h2>\n    \n        <div>\n            <label>Username:</label>\n            <input type=\"text\" id=\"username\" [(ngModel)] = \"username\"/>\n        </div>\n        <div>\n            <label>Password:</label>\n            <input type=\"text\" id=\"password\" [(ngModel)] = \"password\"/>\n        </div>\n        <div>\n            <button type=\"button\" (click)=\"login()\">\n            Login\n            </button>\n        </div>\n    \n    ",
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map