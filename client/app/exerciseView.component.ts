import { Component, Input } from '@angular/core';
import { Plan } from './plan';

@Component({
    selector: 'ex-view',
    template: `
        <table *ngIf="plan != undefined">
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Reps</th>
                <th>Sets</th>
            </tr>
            <tr *ngFor="let exercise of plan.exercises">
                <td>{{exercise.name}}</td>
                <td>{{exercise.desc}}</td>
                <td>{{exercise.reps}}</td>
                <td>{{exercise.sets}}</td>
            </tr>
        </table>
    `,
    styles: [`
    table {
      width: 100%;
    }

    td {
        text-align: center;
    }
    `]
})
export class ExerciseViewComponent {
    @Input() plan: Plan;
}