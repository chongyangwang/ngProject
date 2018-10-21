import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  pwdValidator,
  telValidator,
  telAsyncValidator
} from '../validators/validators';
@Component({
  selector: 'app-response-form3',
  templateUrl: './response-form3.component.html',
  styleUrls: ['./response-form3.component.css']
})
export class ResponseForm3Component implements OnInit {
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: fb.control('赵本山', [
        Validators.required,
        Validators.minLength(6)
      ]),
      tel: fb.control(13691158201, telValidator, telAsyncValidator),
      pwdGroup: fb.group(
        {
          pwd: fb.control('123456', [Validators.minLength(6)]),
          confirmpwd: fb.control('123456')
        },
        {
          validator: pwdValidator
        }
      )
    });
  }
  formModel: FormGroup;

  ngOnInit() {}
  onSubmit() {
    // const isValued: boolean = this.formModel.get('username').valid;
    // console.log('username的校验结果是' + isValued);
    // const errMessage: any = this.formModel.get('username').errors;
    // console.log('username的错误信息是' + JSON.stringify(errMessage));
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
