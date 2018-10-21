import {
  Component,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-cycle6',
  templateUrl: './cycle6.component.html',
  styleUrls: ['./cycle6.component.css']
})
export class Cycle6Component
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    console.log('子组件模板初始化完毕');
  }
  ngAfterViewChecked(): void {
    console.log('子组件模板变更检测完毕');
  }
  ngAfterContentInit() {
    console.log('子组件投影内容初始化完毕');
  }
  ngAfterContentChecked() {
    console.log('子组件投影内容变更检测完毕');
  }
}
