import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Company } from '../company/company.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class CompanyResolve implements Resolve<Company> {
  constructor(private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Company> | Promise<Company> | Company {
    const companyId: number = route.params['id'];
    if (Number(companyId) === 1) {
      return new Company(1, '华瑞新智');
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}
