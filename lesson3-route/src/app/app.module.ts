import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { Page404Component } from './page404/page404.component';
import { CompanydescComponent } from './companydesc/companydesc.component';
import { CompanybossComponent } from './companyboss/companyboss.component';
import { ChatmoneyComponent } from './chatmoney/chatmoney.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    Page404Component,
    CompanydescComponent,
    CompanybossComponent,
    ChatmoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
