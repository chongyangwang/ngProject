import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-response-form2',
  templateUrl: './response-form2.component.html',
  styleUrls: ['./response-form2.component.css']
})
export class ResponseForm2Component implements OnInit {
  formModel: FormGroup = new FormGroup({
    userGroup: new FormGroup({
      from: new FormControl(new Date()),
      to: new FormControl(new Date())
    })
  });
  username: FormControl = new FormControl('张三');
  constructor() {}

  ngOnInit() {}
  onSubmit() {
    console.log(this.formModel.value);
  }
}
