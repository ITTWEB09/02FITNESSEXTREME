import { Component, OnInit } from '@angular/core';
import { Exercise } from './exercise';
import { HttpService } from './http.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>Fitness planning!</h1>
    <header>
      <nav>
        <a routerLink="/" routerLinkActive="active">View plans</a>
        <a routerLink="/create" routerLinkActive="active">Create plan</a>
        <a routerLink="/login" routerLinkActive="active">Login</a>
        <a routerLink="/signup" routerLinkActive="active">Signup</a>
        <a routerLink="/logout" routerLinkActive="active">Logout</a>
      </nav>
    </header>
    <router-outlet></router-outlet>
    `,
    providers: [HttpService]
})
export class AppComponent {
  plans: Exercise[];
  
  constructor(private httpService: HttpService) {}

  getPlans(): void {
    this.httpService.getPlans().then(plans => this.plans = plans);
  }
  

  ngOnInit(): void {
    //this.getPlans();
  }
}