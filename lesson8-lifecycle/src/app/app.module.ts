import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Cycle1Component } from './cycle1/cycle1.component';
import { Cycle2Component } from './cycle2/cycle2.component';
import { Cycle3Component } from './cycle3/cycle3.component';
import { Cycle4Component } from './cycle4/cycle4.component';
import { Cycle5Component } from './cycle5/cycle5.component';
import { Cycle6Component } from './cycle6/cycle6.component';
import { Cycle7Component } from './cycle7/cycle7.component';
import { Cycle8Component } from './cycle8/cycle8.component';

const routeConfig: Routes = [
  { path: '', component: Cycle7Component },
  { path: 'cycle8', component: Cycle8Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Cycle1Component,
    Cycle2Component,
    Cycle3Component,
    Cycle4Component,
    Cycle5Component,
    Cycle6Component,
    Cycle7Component,
    Cycle8Component
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routeConfig)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
