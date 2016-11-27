import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ExerciseViewComponent } from './exerciseView.component';
import { PlanViewComponent } from './planView.component';
import { CreateComponent } from './create.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';

const appRoutes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: PlanViewComponent }
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
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
