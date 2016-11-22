import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
    selector: 'create',
    template: `
    <ex-view [plan]="selectedPlan"></ex-view>
    `
})
export class CreateComponent {
  public selectedPlan: [Exercise] = [
    { name: "Test1", desc: "Test1", reps: 5, sets:5 },
    { name: "Test2", desc: "Test2", reps: 5, sets:5 }
  ];
}