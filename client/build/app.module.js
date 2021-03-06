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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var exerciseView_component_1 = require('./exerciseView.component');
var planView_component_1 = require('./planView.component');
var create_component_1 = require('./create.component');
var login_component_1 = require('./login.component');
var http_service_1 = require('./http.service');
var signup_component_1 = require('./signup.component');
var login_guard_1 = require('./login.guard');
var logout_component_1 = require('./logout.component');
var appRoutes = [
    { path: 'create', component: create_component_1.CreateComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: '', component: planView_component_1.PlanViewComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes),
                http_1.HttpModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                exerciseView_component_1.ExerciseViewComponent,
                planView_component_1.PlanViewComponent,
                create_component_1.CreateComponent,
                exerciseView_component_1.ExerciseViewComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                logout_component_1.LogoutComponent
            ],
            providers: [
                http_service_1.HttpService,
                login_guard_1.LoginGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map