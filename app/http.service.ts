import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response} from '@angular/http';
import { Exercise } from './exercise';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    private plansUrl = 'app/plans';
    private loginUrl = 'app/auth';

    constructor(private http: Http) {

    }

    getPlans() : Promise<Exercise[]> { 
        return this.http.get(this.plansUrl)
            .toPromise()
            .then(response => response.json().data as Exercise[])
            .catch(this.handleError);
    }

    doLogin(username: string, password: string): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.loginUrl, {"username": username, "password": password}, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
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
}