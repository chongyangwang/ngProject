import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export function telValidator(control: FormControl): any {
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const isValued = myreg.test(control.value);
  console.log('手机号校验结果是：' + isValued);
  return isValued ? null : { tel: true };
}

export function telAsyncValidator(control: FormControl): any {
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const isValued = myreg.test(control.value);
  console.log('手机号校验结果是：' + isValued);
  return of(isValued ? null : { tel: true });
}

export function pwdValidator(group: FormGroup): any {
  const pwd: FormControl = group.get('pwd') as FormControl;
  const confirmpwd: FormControl = group.get('confirmpwd') as FormControl;
  const isValued: boolean = pwd.value === confirmpwd.value;
  console.log('密码校验结果是' + isValued);
  return isValued
    ? null
    : {
        desc: {
          info: '两次密码不一致'
        }
      };
}
