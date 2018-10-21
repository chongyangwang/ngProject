import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-cycle4',
  templateUrl: './cycle4.component.html',
  styleUrls: ['./cycle4.component.css']
})
export class Cycle4Component
  implements OnInit, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}
  greeting(str: string) {
    console.log(str);
  }
  ngAfterViewInit() {
    console.log('子组件cycle4组件模板初始化完毕');
  }
  ngAfterViewChecked(): void {
    console.log('子组件cycle4模板变更检测完毕');
  }
}
