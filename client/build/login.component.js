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
var LoginComponent = (function () {
    function LoginComponent(httpService) {
        this.httpService = httpService;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        if (!username || !password) {
            return;
        }
        this.httpService.doLogin(username, password)
            .then(function (token) { return _this.token = token; }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'Login',
            template: "\n    <h2> Login </h2>\n    <form>\n        <div>\n            <label>Username:</label>\n            <input type=\"text\" id=\"username\" [ngModel]=\"username\"/>\n        </div>\n        <div>\n            <label>Password:</label>\n            <input type=\"text\" id=\"password\" [ngModel]=\"password\"/>\n        </div>\n        <div>\n            <button type=\"button\" (click)=\"login()\">\n            Login\n            </button>\n        </div>\n    </form>\n    ",
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map