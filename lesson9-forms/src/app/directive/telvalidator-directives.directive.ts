import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { telValidator } from '../validators/validators';

@Directive({
  selector: '[appTelvalidatorDirectives]',
  providers: [{ provide: NG_VALIDATORS, useValue: telValidator, multi: true }]
})
export class TelvalidatorDirectivesDirective {
  constructor() {}
}
