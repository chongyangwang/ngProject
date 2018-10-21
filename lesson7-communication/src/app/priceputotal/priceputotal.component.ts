import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-priceputotal',
  templateUrl: './priceputotal.component.html',
  styleUrls: ['./priceputotal.component.css']
})
export class PriceputotalComponent implements OnInit {
  pricePutotal: Priceputotal = new Priceputotal('RMB', 0);
  @Output()
  lastPrice: EventEmitter<Priceputotal> = new EventEmitter();
  @Output()
  buy: EventEmitter<Priceputotal> = new EventEmitter();
  constructor() {
    setInterval(() => {
      const pricePutotal: Priceputotal = new Priceputotal(
        'RMB',
        100 * Math.random()
      );
      this.pricePutotal = pricePutotal;
      this.lastPrice.emit(this.pricePutotal);
    }, 1000);
  }
  buyStocked() {
    this.buy.emit(this.pricePutotal);
  }
  ngOnInit() {}
}

export class Priceputotal {
  constructor(public stockcode: string, public latestPrice: number) {}
}
