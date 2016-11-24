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
var PlanViewComponent = (function () {
    function PlanViewComponent() {
        this.selectedPlan = [
            { name: "Test1", desc: "Test1", reps: 5, sets: 5 },
            { name: "Test2", desc: "Test2", reps: 5, sets: 5 }
        ];
        this.selectedPastPlan = [
            { name: "Test1", desc: "Test1", reps: 5, sets: 5 },
            { name: "Test2", desc: "Test2", reps: 5, sets: 5 }
        ];
    }
    PlanViewComponent.prototype.clicked = function () {
        console.log("Working as intended??: " + event);
    };
    PlanViewComponent = __decorate([
        core_1.Component({
            selector: 'planView',
            template: "\n    <h1>Fitness planning!</h1>\n    <select [(ngModel)]=\"selected1\">\n      <option *ngFor=\"let sp of selectedPlan\" [ngValue]=\"sp\">{{sp.name}}</option>\n    </select>\n    <select [(ngModel)]=\"selected2\">\n      <option *ngFor=\"let sp of selectedPastPlan\" [ngValue]=\"sp\">{{sp.name}}</option>\n    </select>\n    <button type=\"button\" (click)=\"clicked()\">\n      Log exercise\n    </button>\n    <ex-view></ex-view>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PlanViewComponent);
    return PlanViewComponent;
}());
exports.PlanViewComponent = PlanViewComponent;
//# sourceMappingURL=planView.component.js.map