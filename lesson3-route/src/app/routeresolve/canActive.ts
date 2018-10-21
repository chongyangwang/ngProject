import { CanActivate } from '@angular/router';
export class LoginGuard implements CanActivate {
  canActivate() {
    const canlogin: boolean = Math.random() > 0.5;
    if (!canlogin) {
      alert('登陆状态为否，禁止此用户登陆');
    }
    return canlogin;
  }
}
