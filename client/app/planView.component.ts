import { Component } from '@angular/core';
import { Exercise } from './exercise';
import { HttpService } from './http.service';

@Component({
    selector: 'planView',
    template: `
    <select [(ngModel)]="selected1">
      <option *ngFor="let sp of selectedPlan" [ngValue]="sp">{{sp.name}}</option>
    </select>
    <select [(ngModel)]="selected2">
      <option *ngFor="let sp of selectedPastPlan" [ngValue]="sp">{{sp.name}}</option>
    </select>
    <button type="button" (click)="logExercise()">
      Log exercise
    </button>
    <ex-view [plan]="_selectedPlan"></ex-view>
    `,
    providers: [HttpService]
})
export class PlanViewComponent {
    constructor(private httpService: HttpService) {}
  private _selectedPlan: [Exercise] = [
        { name: "Test1", desc: "Test1", reps: 5, sets:5 },
        { name: "Test2", desc: "Test2", reps: 5, sets:5 }
    ]
    private selectedPastPlan: [Exercise] = [
        { name: "Test1", desc: "Test1", reps: 5, sets:5 },
        { name: "Test2", desc: "Test2", reps: 5, sets:5 }
    ]

    logExercise(){
      
      //Need id - got it???
       this.httpService.completePlan(this.selected1).subscribe(
            res => {
                console.log(res.text());
                //Add to past
 

                this.selectedPastPlan.push[this.selected1];
                //Remove from present
                this.selectedPlan.splice(this.selected1,1);
                
    console.log("Working as intended??: " + event);
            },
            err => console.log("An error occured : " + err)
        );
    }
    
     private _plans: string[] = [];

  getPlans(): void {
    this._httpService.getPlans().then(plans => this._plans = plans);
  }
}