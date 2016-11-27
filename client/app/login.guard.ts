import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

import 'rxjs/add/operator/do';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private _httpService: HttpService, private _router: Router) {}

  canActivate(): Observable<boolean> {
    return this._httpService.checkLogin().do(succ => {
      if(!succ) {
        this._router.navigateByUrl('/login');
      }
    });
  }
}