import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.css']
})
export class ResponseFormComponent implements OnInit {
  formModel: FormGroup;
  username: FormControl = new FormControl('李四');
  constructor(private fb: FormBuilder) {
    this.formModel = fb.group({
      userGroup: fb.group({
        from: fb.control(new Date()),
        to: fb.control(new Date())
      }),
      username: fb.control('张三'),
      emails: fb.array([
        fb.control('1342737614@qq.com'),
        fb.control('wcy_2015_bp@163.com')
      ])
    });
  }

  ngOnInit() {}
  onSubmit() {
    console.log(this.formModel.value);
  }
  get emails() {
    return this.formModel.get('emails') as FormArray;
  }
  addEmail() {
    this.emails.push(this.fb.control(''));
  }
}
