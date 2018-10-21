import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes1',
  templateUrl: './pipes1.component.html',
  styleUrls: ['./pipes1.component.css']
})
export class Pipes1Component implements OnInit {
  birthday:any = new Date()
  pi:any = 3.14159267
  constructor() { }

  ngOnInit() {
  }

}
