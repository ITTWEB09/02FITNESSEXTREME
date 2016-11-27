import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response} from '@angular/http';
import { Exercise } from './exercise';
import { Plan } from './plan';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    private plansUrl = 'api/workoutPlan';
    private loginUrl = 'auth';
    private tokenUrl = 'auth_token';
    private createUrl = 'api/workoutPlan';
    private signupUrl = '/api/saveUser';
    private completePlanUrl = '/api/workoutPlan/complete/'

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
    }

    completePlan(id: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let bodyObj = JSON.stringify({"id": id});

        return this.http.put(this.completePlanUrl + id, bodyObj, options);
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
    
	createPlan(plan : Plan) : Observable<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.bG9sbWFu.DKioyojgweMoeUaKLbz4eMR7bjh_uzMDkCEYUjy9XGw');

        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.createUrl, JSON.stringify(plan), options);
    }

    checkLogin() : Observable<boolean> {
        if(document.cookie.indexOf('myToken') == -1) {
            return Observable.create(obs => {
                obs.next(false);
                obs.complete();
            });
        }

        return this.http.post(this.tokenUrl, null).flatMap(res => {
            return Observable.create(obs => {
                obs.next(res.ok);
                obs.complete();
            });
        });
    }
}