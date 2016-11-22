import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ExerciseViewComponent } from './exerciseView.component';
<<<<<<< HEAD
import { PlanViewComponent } from './planView.component';
=======
import { CreateComponent } from './create.component';

const appRoutes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: '', component: PlanViewComponent }
]
>>>>>>> 26952ded40bef799d6c90e6c2ee713a540947bdd

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ExerciseViewComponent,
    PlanViewComponent

=======
    CreateComponent,
    ExerciseViewComponent
>>>>>>> 26952ded40bef799d6c90e6c2ee713a540947bdd
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
