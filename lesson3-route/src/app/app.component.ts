import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson3-route';
  constructor(private router: Router) {}
  toCompanydetail() {
    this.router.navigate(['/company', 2]);
  }
}
