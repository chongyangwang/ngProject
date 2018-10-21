import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attrbind',
  templateUrl: './attrbind.component.html',
  styleUrls: ['./attrbind.component.css']
})
export class AttrbindComponent implements OnInit {
  imgUrl: String =
    'https://img.alicdn.com/bao/uploaded/i3/2103150710/O1CN011H7DfYchIsTXLFb_!!0-item_pic.jpg_320x320.jpg';
  constructor() {}

  ngOnInit() {}
  handelInput(event: any) {
    console.log(event.target.value + '-----dom属性' + '----------可更改');
    console.log(
      event.target.getAttribute('value') +
        '-----html属性' +
        '------------不可更改'
    );
  }
}
