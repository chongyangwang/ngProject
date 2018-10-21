import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input()
  private rating: number;
  stars: boolean[];
  @Input()
  readonly = true;
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 6; i++) {
      this.stars.push(i > this.rating);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    this.stars = [];
    for (let i = 1; i <= 6; i++) {
      this.stars.push(i > this.rating);
    }
  }
  clickStar(i) {
    if (!this.readonly) {
      this.rating = i + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
