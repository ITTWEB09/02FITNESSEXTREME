import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HttpService } from './http.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private httpService: HttpService) {}

  canActivate() {
    return true;
  }
}