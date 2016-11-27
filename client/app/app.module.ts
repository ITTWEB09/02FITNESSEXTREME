import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ExerciseViewComponent } from './exerciseView.component';
import { PlanViewComponent } from './planView.component';
import { CreateComponent } from './create.component';
import { LoginComponent } from './login.component';
import { HttpService } from './http.service';
import { SignupComponent } from './signup.component';
import { LoginGuard } from './login.guard';

const appRoutes: Routes = [
  { path: 'create', component: CreateComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: PlanViewComponent, canActivate: [LoginGuard] }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ExerciseViewComponent,
    PlanViewComponent,
    CreateComponent,
    ExerciseViewComponent,
    LoginComponent,
    SignupComponent
  providers: [
    HttpService,
    LoginGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
