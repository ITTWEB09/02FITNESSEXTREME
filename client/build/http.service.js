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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/mergeMap');
var Observable_1 = require('rxjs/Observable');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.plansUrl = 'api/workoutPlan';
        this.loginUrl = 'auth';
        this.tokenUrl = 'auth_token';
        this.createUrl = 'api/workoutPlan';
        this.signupUrl = '/api/saveUser';
    }
    HttpService.prototype.getPlans = function () {
        return this.http.get(this.plansUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpService.prototype.doLogin = function (username, password) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var bodyObj = JSON.stringify({ "username": username, "password": password });
        return this.http.post(this.loginUrl, bodyObj, options);
    };
    HttpService.prototype.signup = function (username, password) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var bodyObj = JSON.stringify({ "username": username, "password": password });
        return this.http.post(this.signupUrl, bodyObj, options);
        //console.log("Post signup complete");
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    HttpService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    HttpService.prototype.createPlan = function (plan) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.bG9sbWFu.DKioyojgweMoeUaKLbz4eMR7bjh_uzMDkCEYUjy9XGw');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.createUrl, JSON.stringify(plan), options);
    };
    HttpService.prototype.checkLogin = function () {
        if (document.cookie.indexOf('myToken') == -1) {
            return Observable_1.Observable.create(function (obs) {
                obs.next(false);
                obs.complete();
            });
        }
        return this.http.post(this.tokenUrl, null).flatMap(function (res) {
            return Observable_1.Observable.create(function (obs) {
                obs.next(res.ok);
                obs.complete();
            });
        });
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map