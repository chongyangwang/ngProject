import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Resp1Component } from './resp1/resp1.component';
import { Resp2Component } from './resp2/resp2.component';
import { Pipes1Component } from './pipes1/pipes1.component';

@NgModule({
  declarations: [AppComponent, Resp1Component, Resp2Component, Pipes1Component],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
