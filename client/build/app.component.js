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
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
    }
    AppComponent.prototype.getPlans = function () {
        var _this = this;
        this.httpService.getPlans().then(function (plans) { return _this.plans = plans; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPlans();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>Fitness planning!</h1>\n    <header>\n      <nav>\n        <a routerLink=\"/\" routerLinkActive=\"active\">View plan</a>\n        <a routerLink=\"/create\" routerLinkActive=\"active\">Create plan</a>\n        <a routerLink=\"/logout\" routerLinkActive=\"active\">Logout</a>\n      </nav>\n    </header>\n    <router-outlet></router-outlet>\n    ",
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map