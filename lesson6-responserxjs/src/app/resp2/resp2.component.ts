import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: "app-resp2",
  templateUrl: "./resp2.component.html",
  styleUrls: ["./resp2.component.css"]
})
export class Resp2Component implements OnInit {
  searchInput: FormControl = new FormControl();
  name:string = '';
  constructor() {
    this.searchInput.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(stockcode => this.getstockInfo(stockcode));
      // .subscribe(stockcode => this.name = stockcode);
  }

  ngOnInit() {}
  onKeyup(value: string) {
    console.log('键盘抬起' + value);
  }
  getstockInfo(code) {
    console.log(code);
  }
}
