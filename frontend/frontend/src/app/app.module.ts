import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrotesComponent } from './brotes/brotes.component';
import { BroteCardComponent } from './brote-card/brote-card.component';
import { BroteFormComponent } from './brote-form/brote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BrotesComponent,
    BroteCardComponent,
    BroteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
