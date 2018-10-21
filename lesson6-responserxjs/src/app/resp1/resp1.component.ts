import { Component, OnInit } from "@angular/core";
import { Observable ,of} from "rxjs";
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: "app-resp1",
  templateUrl: "./resp1.component.html",
  styleUrls: ["./resp1.component.css"]
})
export class Resp1Component implements OnInit {
  constructor() {
    // const squareOdd = of(1, 2, 3, 4, 5)
    const squareOdd = from([1, 2, 3, 4, 5])
  .pipe(
    filter(n => n % 2 !== 0),
    map(n => n * n)
  );
squareOdd.subscribe(x => console.log(x));
  }

  ngOnInit() {}
}
