import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companyboss',
  templateUrl: './companyboss.component.html',
  styleUrls: ['./companyboss.component.css']
})
export class CompanybossComponent implements OnInit {
  private bossName: string;
  constructor(private routeInfo: ActivatedRoute) {}
  ngOnInit() {
    this.bossName = this.routeInfo.snapshot.params['bossName'];
  }
}
