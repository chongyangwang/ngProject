import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { AttrbindComponent } from './attrbind/attrbind.component';
import { HtmlbindComponent } from './htmlbind/htmlbind.component';
import { CssbindComponent } from './cssbind/cssbind.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    AttrbindComponent,
    HtmlbindComponent,
    CssbindComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
