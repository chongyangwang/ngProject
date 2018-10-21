import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges
} from '@angular/core';
let index = 1;
@Component({
  selector: 'app-cycle1',
  templateUrl: './cycle1.component.html',
  styleUrls: ['./cycle1.component.css']
})
export class Cycle1Component
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input()
  name = '';
  logInit(msg: string) {
    console.log(`${index++},${msg}`);
  }
  constructor() {
    this.logInit('name属性在constructor里的值是' + name);
  }
  ngOnInit() {
    this.logInit('name属性在ngOnInit里的值是' + name);
  }
  ngDoCheck() {
    this.logInit('name属性在ngDoCheck里的值是' + name);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const name = changes['name'].currentValue;
    this.logInit('name属性在ngOnChanges里的值是' + name);
  }
  ngAfterContentInit() {
    this.logInit('name属性在ngAfterContentInit里的值是' + name);
  }
  ngAfterContentChecked() {
    this.logInit('name属性在ngAfterContentChecked里的值是' + name);
  }
  ngAfterViewInit() {
    this.logInit('name属性在ngAfterViewInit里的值是' + name);
  }
  ngAfterViewChecked() {
    this.logInit('name属性在ngAfterViewChecked里的值是' + name);
  }
  ngOnDestroy() {
    this.logInit('name属性在ngOnDestroy里的值是' + name);
  }
}
