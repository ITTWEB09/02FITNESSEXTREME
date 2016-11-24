import { Injectable } from '@angular/core';
import { Exercise } from './exercise';


@Injectable()
export class HttpService {
    getPlans() : Promise<[string]> { 
        return Promise.resolve(["plan1", "plan2"]); 
    }

    createPlan(plan : Exercise[]) : Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.log(plan);
            resolve(true);
        });
    }
}