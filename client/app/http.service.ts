import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response} from '@angular/http';
import { Exercise } from './exercise';
import { Plan } from './plan';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    private plansUrl = 'api/workoutPlan';
    private loginUrl = 'auth';
    private createUrl = 'api/workoutPlan';
    private signupUrl = '/api/saveUser';

    constructor(private http: Http) {

    }

    getPlans() : Promise<string[]> { 
        return this.http.get(this.plansUrl)
            .toPromise()
            .then(response => response.json().data as string[])
            .catch(this.handleError);
    }

    doLogin(username: string, password: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let bodyObj = JSON.stringify({"username": username, "password": password});

        return this.http.post(this.loginUrl, bodyObj, options);
    }
    
    signup(username: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let bodyObj = JSON.stringify({"username": username, "password": password});

        return this.http.post(this.signupUrl, bodyObj, options);
        //console.log("Post signup complete");
        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError(error: any): Promise<any> {
      // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
	
	createPlan(plan : Plan) : Promise<boolean> {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.bG9sbWFu.DKioyojgweMoeUaKLbz4eMR7bjh_uzMDkCEYUjy9XGw');

            let options = new RequestOptions({ headers: headers });

            this.http.post(this.createUrl, JSON.stringify(plan), options).toPromise().then(() => resolve(true));
        });

        
    }
}