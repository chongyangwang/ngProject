import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-cycle3',
  templateUrl: './cycle3.component.html',
  styleUrls: ['./cycle3.component.css']
})
export class Cycle3Component
  implements OnInit, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}
  greeting(str: string) {
    console.log(str);
  }
  ngAfterViewInit() {
    console.log('子组件cycle3组件模板初始化完毕');
  }
  ngAfterViewChecked(): void {
    console.log('子组件cycle3模板变更检测完毕');
  }
}
