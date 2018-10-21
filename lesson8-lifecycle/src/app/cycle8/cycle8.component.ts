import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cycle8',
  templateUrl: './cycle8.component.html',
  styleUrls: ['./cycle8.component.css']
})
export class Cycle8Component implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {
    console.log('cycle8被销毁');
  }
}
