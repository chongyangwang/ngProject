import {
  Component,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked
} from '@angular/core';
import { Cycle3Component } from './cycle3/cycle3.component';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  //  这一步是获取 dom中的模板属性变量 取得变量 才能调用方法
  @ViewChild('cycle3')
  cycle3: Cycle3Component;
  title = 'lesson8-lifecycle';
  greeting = 'hello';
  user = {
    name: '于娜娜'
  };
  Content = `<div>绑定的html元素是:${this.greeting}</div>`;
  ngOnInit() {
    // 这一步是真正传参的地方
    this.cycle3.greeting('tom');
  }
  ngAfterViewInit() {
    console.log('父组件模板初始化完毕');
  }
  ngAfterViewChecked(): void {
    console.log('父组件模板变更检测完毕');
  }
  ngAfterContentInit() {
    console.log('父组件投影内容初始化完毕');
  }
  ngAfterContentChecked() {
    console.log('父组件投影内容变更检测完毕');
  }
}
