import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-cycle2',
  templateUrl: './cycle2.component.html',
  styleUrls: ['./cycle2.component.css']
})
export class Cycle2Component implements OnInit, OnChanges, DoCheck {
  @Input()
  greeting = '';
  @Input()
  user = {
    name: ''
  };
  message = '啦啦啦啦啦';
  oldUsername = '';
  checkUserBelon = false;
  changeCount = 0;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
  ngDoCheck() {
    if (this.oldUsername !== this.user.name) {
      this.checkUserBelon = true;
      console.log(this.oldUsername);
      console.log(
        'ngdocheck执行 检测到user.name发生变化user.name值从' +
          this.oldUsername +
          '更新为' +
          this.user.name
      );
      this.oldUsername = this.user.name;
    }
    if (this.checkUserBelon) {
      this.changeCount = 0;
    } else {
      this.changeCount++;
      console.log(
        'ngdocheck执行 检测到user.name没有发生变化并执行' +
          this.changeCount +
          '次'
      );
    }
    this.checkUserBelon = false;
  }
}
