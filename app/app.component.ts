import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
    selector: 'my-app',
    template: `
    <h1>Fitness planning!</h1>
    <input></input>
    <ex-view [plan]="selectedPlan"></ex-view>
    `
})
export class AppComponent {
  public selectedPlan: [Exercise];
}