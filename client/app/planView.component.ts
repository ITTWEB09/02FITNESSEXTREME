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
    <button type="button" (click)="clicked()">
      Log exercise
    </button>
    <ex-view [plan]="_selectedPlan"></ex-view>
    `
})
export class PlanViewComponent {
  private _selectedPlan: [Exercise] = [
    { name: "Test1", desc: "Test1", reps: 5, sets:5 },
    { name: "Test2", desc: "Test2", reps: 5, sets:5 }
  ]
  public selectedPastPlan: [Exercise] = [
    { name: "Test1", desc: "Test1", reps: 5, sets:5 },
    { name: "Test2", desc: "Test2", reps: 5, sets:5 }
  ]
  public selected1: string;
  public selected2: string;

  private _plans: string[] = [];

  constructor(private _httpService: HttpService) {}

  getPlans(): void {
    this._httpService.getPlans().then(plans => this._plans = plans);
  }

  clicked(){
    console.log("Working as intended?");
  }
}