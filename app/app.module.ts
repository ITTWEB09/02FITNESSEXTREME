import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ExerciseViewComponent } from './exerciseView.component';
import { CreateComponent } from './create.component';

const appRoutes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: '', component: PlanViewComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    CreateComponent,
    ExerciseViewComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
