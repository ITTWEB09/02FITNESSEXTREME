import { Component, Input } from '@angular/core';
import { Exercise } from './exercise';

@Component({
    selector: 'ex-view',
    template: `
        <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Reps</th>
                <th>Sets</th>
            </tr>
            <tr *ngFor="let exercise of plan">
                <td>{{exercise.name}}</td>
                <td>{{exercise.desc}}</td>
                <td>{{exercise.reps}}</td>
                <td>{{exercise.sets}}</td>
            </tr>
        </table>
    `
})
export class ExerciseViewComponent {
    @Input() plan: [Exercise];
}