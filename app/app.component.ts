import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
    selector: 'my-app',
    template: `
    <h1>Fitness planning!</h1>
    <ex-view></ex-view>
    `
})
export class AppComponent {
  public selectedPlan: [Exercise] = [
    { name: "Test1", desc: "Test1", reps: 5, sets:5 },
    { name: "Test2", desc: "Test2", reps: 5, sets:5 }
  ]
}