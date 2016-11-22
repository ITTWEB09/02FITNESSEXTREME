import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
    selector: 'create',
    template: `
    <h1>Fitness planning!</h1>
    <input></input>
    <ex-view [plan]="selectedPlan"></ex-view>
    `
})
export class CreateComponent {
  public selectedPlan: [Exercise];
}