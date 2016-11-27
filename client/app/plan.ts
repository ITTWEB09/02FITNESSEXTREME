import { Exercise } from './exercise';

export class Plan {
    public id: string;
    public name: string;
    public exercises: Exercise[];
    public completed: boolean;
}