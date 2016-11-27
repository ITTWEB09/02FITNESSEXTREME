import { Exercise } from './exercise';

export class Plan {
    public _id: string;
    public name: string;
    public exercises: Exercise[];
    public completed: boolean;
}