import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form2',
  templateUrl: './template-form2.component.html',
  styleUrls: ['./template-form2.component.css']
})
export class TemplateForm2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSubmit(formValue, valid) {
    console.log(valid);
    console.log(formValue);
  }
}
