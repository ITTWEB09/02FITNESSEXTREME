import { Component } from '@angular/core';
import { Plan } from './plan';
import { HttpService } from './http.service';

@Component({
    selector: 'planView',
    template: `
    <select [(ngModel)]="_selectedCurrentPlan" (change)="onCurrentChange()">
      <option *ngFor="let sp of _currentPlans" [ngValue]="sp">{{sp.name}}</option>
    </select>
    <select [(ngModel)]="_selectedCompletePlan" (change)="onCompleteChange()">
      <option *ngFor="let sp of _completedPlans" [ngValue]="sp">{{sp.name}}</option>
    </select>
    <button type="button" (click)="logExercise()">
      Log exercise
    </button>
    <ex-view [plan]="_planToView"></ex-view>
    `,
    providers: [HttpService]
})
export class PlanViewComponent {
    private _currentPlans: Plan[] = []; 
    private _completedPlans: Plan[] = [];
    private _selectedCurrentPlan: Plan;
    private _selectedCompletePlan: Plan;
    private _planToView: Plan;

    constructor(private _httpService: HttpService) { }
  
    logExercise(){
      console.log(this._selectedCurrentPlan);
       this._httpService.completePlan(this._selectedCurrentPlan._id).subscribe(
            res => {
                this._completedPlans.push(this._selectedCurrentPlan);
                this._currentPlans.splice(this._currentPlans.indexOf(this._selectedCurrentPlan), 1);
            },
            err => console.log("An error occured : " + err)
        );
    }

  getPlans(): void {
    this._httpService.getPlans().subscribe(
       res => {
                var allPlans = res.json();

                allPlans.forEach(element => {
                    if(element.completed) {
                        this._completedPlans.push(element);
                    } else {
                      this._currentPlans.push(element);
                    }
                });
            },
            err => console.log("An error occured : " + err)
        );
  }

  getPlanById(id: string, callback: Function) {
    this._httpService.getPlanById(id).subscribe(
       res => {
                callback(res.json());
            },
            err => console.log("An error occured : " + err)
        );
  }
  onCurrentChange(): void {
    this.getPlanById(this._selectedCurrentPlan._id, plan => {
      if(plan) {
        this._planToView = plan;
      } 
    });
    this._selectedCompletePlan = null;
  }

  onCompleteChange(): void {
    this.getPlanById(this._selectedCompletePlan._id, plan => {
      if(plan) {
        this._planToView = plan;
      } 
    });
    this._selectedCurrentPlan = null;
  }

  ngOnInit() {
        this.getPlans();
    }
}