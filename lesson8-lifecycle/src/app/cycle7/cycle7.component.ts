import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cycle7',
  templateUrl: './cycle7.component.html',
  styleUrls: ['./cycle7.component.css']
})
export class Cycle7Component implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {
    console.log('cycle7被销毁');
  }
}
