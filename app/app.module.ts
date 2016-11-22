import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ExerciseViewComponent } from './exerciseView.component';
import { PlanViewComponent } from './planView.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ExerciseViewComponent,
    PlanViewComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
