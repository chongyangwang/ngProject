import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stock = '';
  pricePutotal: Priceputotal = new Priceputotal('', 0);
  // handelprice(event: Priceputotal) {
  //   console.log('子向父通信');
  //   this.pricePutotal = event;
  // }
  handelbuy(event: Priceputotal) {
    console.log('中间人模式');
    this.pricePutotal = event;
  }
}

export class Priceputotal {
  constructor(public stockcode: string, public latestPrice: number) {}
}
