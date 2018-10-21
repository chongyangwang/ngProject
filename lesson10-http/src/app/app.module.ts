import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { WebsocketComponent } from './websocket/websocket.component';
import { WebsocketService } from './shared/websocket.service';

@NgModule({
  declarations: [AppComponent, ProductComponent, WebsocketComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
