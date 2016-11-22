import { Component, Input } from '@angular/core';
import { Exercise } from './exercise';

@Component({
    selector: 'ex-view',
    template: `
        Test!
    `
})
export class ExerciseViewComponent {
    @Input()
    plan: [Exercise]
}