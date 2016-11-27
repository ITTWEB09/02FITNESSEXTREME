import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>Fitness planning!</h1>
    <header>
      <nav>
        <a routerLink="/" routerLinkActive="active">View plans</a>
        <a routerLink="/create" routerLinkActive="active">Create plan</a>
        <a routerLink="/logout" routerLinkActive="active">Logout</a>
      </nav>
    </header>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {}