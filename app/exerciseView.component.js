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
var ExerciseViewComponent = (function () {
    function ExerciseViewComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ExerciseViewComponent.prototype, "plan", void 0);
    ExerciseViewComponent = __decorate([
        core_1.Component({
            selector: 'ex-view',
            template: "\n        <table>\n            <tr>\n                <th>Name</th>\n                <th>Description</th>\n                <th>Reps</th>\n                <th>Sets</th>\n            </tr>\n            <tr *ngFor=\"let exercise of plan\">\n                <td>{{exercise.name}}</td>\n                <td>{{exercise.desc}}</td>\n                <td>{{exercise.reps}}</td>\n                <td>{{exercise.sets}}</td>\n            </tr>\n        </table>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ExerciseViewComponent);
    return ExerciseViewComponent;
}());
exports.ExerciseViewComponent = ExerciseViewComponent;
//# sourceMappingURL=exerciseView.component.js.map