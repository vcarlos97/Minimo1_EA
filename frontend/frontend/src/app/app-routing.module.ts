import { BroteFormComponent } from './brote-form/brote-form.component';
import { BrotesComponent } from './brotes/brotes.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/brotes'},
  { path: 'brotes', component: BrotesComponent},
  { path : 'update/:name', component: BroteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
