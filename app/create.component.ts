import { Component } from '@angular/core';
import { Exercise } from './exercise';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'create',
    template: `
    <div id="container">
      <form [formGroup]="_exForm" (ngSubmit)="submitPlan()">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" formControlName="name"/>
        </div>
        <div>
          <label for="desc">Description:</label>
          <textarea id="desc" formControlName="desc"></textarea>
        </div>
        <div>
          <label for="reps">Repetitions:</label>
          <input type="number" id="reps" formControlName="reps"/>
        </div>
        <div>
          <label for="sets">Sets:</label> 
          <input type="number" id="sets" formControlName="sets"/>
        </div>
        <div>
          <button type="button" (click)="addExercise()" 
            [disabled]="!_exForm.valid">Add exercise</button>
          <button type="submit" 
            [disabled]="_selectedPlan == undefined || _selectedPlan.length == 0">Submit plan</button>
        </div>
      </form>
      <ex-view [plan]="_selectedPlan"></ex-view>
    </div>
    `,
    styles: [`
    div#container {
      width: 850px;
    }

    form {
      float: left;
      width: 350px;
    }

    ex-view {
      float: right;
      width: 500px;
    }

    form div {
      padding-top: 10px;
    }

    form div * {
      vertical-align: top;
    }

    label {
      display: inline-block;
      width: 125px;
    }

    input, textarea {
      width: 200px;
    }

    textarea {
      height: 150px;
    }

    input.ng-invalid, textarea.ng-invalid {
      border: 1px solid red;
    }
    `]
})
export class CreateComponent {
  private _selectedPlan: Exercise[] = [];

  private _exForm = this._fb.group({
    name: ['', Validators.required],
    desc: ['', Validators.required],
    reps: ['', Validators.required],
    sets: ['', Validators.required]
  });

  constructor(private _fb: FormBuilder) {}

  addExercise() {
    console.log("Adding exercise to plan!");
    this._selectedPlan.push(this._exForm.value);
  }

  submitPlan() {
    console.log("Submitting plan!");
    console.log(this._selectedPlan);
  }
}