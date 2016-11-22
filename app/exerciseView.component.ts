import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
    selector: 'ex-view',
    template: `
        Test!
    `,
    inputs: ['plan']
})
export class ExerciseViewComponent {
    public plan: [Exercise];
}