import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { PriceputotalComponent } from './priceputotal/priceputotal.component';

@NgModule({
  declarations: [AppComponent, OrderComponent, PriceputotalComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
