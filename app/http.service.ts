import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
    getPlans() : Promise<[string]> { 
        return Promise.resolve(["plan1", "plan2"]); 
    }
}