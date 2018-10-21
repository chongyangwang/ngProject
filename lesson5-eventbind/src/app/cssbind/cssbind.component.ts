import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssbind',
  templateUrl: './cssbind.component.html',
  styleUrls: ['./cssbind.component.css']
})
export class CssbindComponent implements OnInit {
  textClass = 'a b c';
  isNight: any = false;
  name: any = '123';
  isAppear: any = false;
  pClass: any = { a: false, b: false, c: false };
  pStyle: any = {
    fontSize: '',
    fontWeight: ''
  };
  constructor() {
    setTimeout(() => {
      this.isAppear = true;
      this.pClass = {
        a: true,
        b: true,
        c: true
      };
      this.pStyle = {
        fontSize: '35px',
        fontWeight: 'bold'
      };
    }, 3000);
  }

  ngOnInit() {}
}
