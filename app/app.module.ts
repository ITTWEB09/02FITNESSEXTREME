import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ExerciseViewComponent } from './exerciseView.component';
import { PlanViewComponent } from './planView.component';
import { CreateComponent } from './create.component';

import { HttpModule }    from '@angular/http';

const appRoutes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: '', component: PlanViewComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    ExerciseViewComponent,
    PlanViewComponent,
    CreateComponent,
    ExerciseViewComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
