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
var forms_1 = require('@angular/forms');
var CreateComponent = (function () {
    function CreateComponent(_fb) {
        this._fb = _fb;
        this._selectedPlan = [];
        this._exForm = this._fb.group({
            name: ['', forms_1.Validators.required],
            desc: ['', forms_1.Validators.required],
            reps: ['', forms_1.Validators.required],
            sets: ['', forms_1.Validators.required]
        });
    }
    CreateComponent.prototype.addExercise = function () {
        console.log("Adding exercise to plan!");
        this._selectedPlan.push(this._exForm.value);
    };
    CreateComponent.prototype.submitPlan = function () {
        console.log("Submitting plan!");
        console.log(this._selectedPlan);
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'create',
            template: "\n    <div id=\"container\">\n      <form [formGroup]=\"_exForm\" (ngSubmit)=\"submitPlan()\">\n        <div>\n          <label for=\"name\">Name:</label>\n          <input type=\"text\" id=\"name\" formControlName=\"name\"/>\n        </div>\n        <div>\n          <label for=\"desc\">Description:</label>\n          <textarea id=\"desc\" formControlName=\"desc\"></textarea>\n        </div>\n        <div>\n          <label for=\"reps\">Repetitions:</label>\n          <input type=\"number\" id=\"reps\" formControlName=\"reps\"/>\n        </div>\n        <div>\n          <label for=\"sets\">Sets:</label> \n          <input type=\"number\" id=\"sets\" formControlName=\"sets\"/>\n        </div>\n        <div>\n          <button type=\"button\" (click)=\"addExercise()\" \n            [disabled]=\"!_exForm.valid\">Add exercise</button>\n          <button type=\"submit\" \n            [disabled]=\"_selectedPlan == undefined || _selectedPlan.length == 0\">Submit plan</button>\n        </div>\n      </form>\n      <ex-view [plan]=\"_selectedPlan\"></ex-view>\n    </div>\n    ",
            styles: ["\n    div#container {\n      width: 850px;\n    }\n\n    form {\n      float: left;\n      width: 350px;\n    }\n\n    ex-view {\n      float: right;\n      width: 500px;\n    }\n\n    form div {\n      padding-top: 10px;\n    }\n\n    form div * {\n      vertical-align: top;\n    }\n\n    label {\n      display: inline-block;\n      width: 125px;\n    }\n\n    input, textarea {\n      width: 200px;\n    }\n\n    textarea {\n      height: 150px;\n    }\n\n    input.ng-invalid, textarea.ng-invalid {\n      border: 1px solid red;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map