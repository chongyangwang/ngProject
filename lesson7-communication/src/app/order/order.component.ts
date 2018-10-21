import { Component, OnInit, Input } from '@angular/core';
import { Priceputotal } from '../priceputotal/priceputotal.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // @Input()
  // stockcode: any = '';
  // @Input()
  // amount: any = '';
  @Input()
  pricePutotal: Priceputotal;
  constructor() {}

  ngOnInit() {}
}
