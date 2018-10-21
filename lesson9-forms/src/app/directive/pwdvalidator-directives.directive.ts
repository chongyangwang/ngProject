import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { pwdValidator } from '../validators/validators';

@Directive({
  selector: '[appPwdvalidatorDirectives]',
  providers: [{ provide: NG_VALIDATORS, useValue: pwdValidator, multi: true }]
})
export class PwdvalidatorDirectivesDirective {
  constructor() {}
}
